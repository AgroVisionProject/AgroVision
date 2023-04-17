import React from 'react';
import { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
function App() {
    const [currentVariable, setCurrentVariable] = useState('');
    const [currentScen, setCurrentScen] = useState('');
    const [chartData, setChartData] = useState('');



    function getOutVars(){
         let variOptions = {
            "Evapotranspiration":{"units":"mm/year", "name":"aet"},
            "Drainage":{"units":"mm/year", "name":"bot_drainage"},
            "Crop yield":{"units":"bu/ac", "name":"cropyld"},
            "Annual fertilizer+manure N added":{"units":"kg-N/ha", "name":"fertilizer"},
            "Flow-weighted mean nitrate concentration":{"units":"ppm", "name":"no3conc"},
            "Annual total nitrate leached":{"units":"kg NO3-N/ha", "name":"no3leach"},
            "Surface runoff ":{"units":"mm/year", "name":"srunoff"},
            "Soil carbon to 1m depth":{"units":"kg-C/m2", "name":"totcsoi"},
            "Irrigation water applied":{"units":"mm/year", "name":"totirrig"},
         }

        return variOptions
    }
    function handleVarOutputChange(e){
        console.log("new variable is", e.currentTarget.value)
        setCurrentVariable(e.currentTarget.value)
    }
    function handleScenarioChange(e){
        console.log("new scenario is", e.currentTarget.value)
        setCurrentScen(e.currentTarget.value)

    }
    function getData(){
        let baseURL = "agrovision/data"
        console.log(currentScen, currentVariable)
        axios.post(baseURL,
        { "variable":currentVariable, "scenario":currentScen
        }).then((response) => {
            console.log(response.data.response)
            let data = [
              {
                name: '1990',
                aet: 2400.2343243243,
              },
              {
                name: '1991',
                aet: 2400.35435,
              }
              ]
            console.log(data)
//            setChartData(data)
            setChartData(response.data.response)
        });


    }
    let outputVars = getOutVars()

    return (
    <div>
        <Form.Select aria-label="Select Scenario" onChange={(e) => handleScenarioChange(e)}>
          <option>Select a Scenario</option>
          <option value="cc_i_50perawc">Continuous corn, irrigated at 50% AWC threshold</option>

        </Form.Select>

        <Form.Select aria-label="Select Scenario" onChange={(e) => handleVarOutputChange(e)}>
          <option>Select a Variable</option>
          {Object.keys(outputVars).map((key,index) => (
            <option value={outputVars[key]["name"]} key={index}>{key}</option>
          )
          )}
        </Form.Select>
        <Button onClick={getData} variant="success" >Retrieve Data</Button>
        <div>
        <ResponsiveContainer width="100%" height={400}>
            <LineChart

              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={currentVariable} stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>

        </ResponsiveContainer>
        </div>



    </div>



  );
}

export default App;
