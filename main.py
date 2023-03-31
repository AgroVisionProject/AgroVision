"""
File: main.py
Description: Driver for reading netcdf file from Agro Ibis outputs
Author: Matthew Bayles
Date: 3-31-2023
"""
import nc_opener as nco
import os

START_YEAR = 1948
# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    file_path = os.path.join("input_files", "AgroIBIS_output_Sim6d.nc")
    nc_file = nco.NCOpener(file_path)
    nc_data = nc_file.open_nc_file()
    print("File Header")
    print(nc_data)
    print("Variable aet")
    print(nc_data.variables["aet"])
    print(nc_data.variables["cropyld"])
    print(nc_data.variables["longitude"])
    print(nc_data.dimensions["lengthd"])
    # print(nc_data.variables["aet"][:])
    counter = 0
    # year is a numpy masked array
    # for year in nc_data.variables["longitude"]:
    #     print(counter + START_YEAR)
    #     print(year)
    #     # print(year.mean())
    #     counter = counter + 1
