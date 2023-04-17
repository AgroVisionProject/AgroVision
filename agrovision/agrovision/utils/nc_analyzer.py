"""
File: nc_analyzer.py
Description: Driver for reading netcdf file from Agro Ibis outputs
Author: Matthew Bayles
Date: 3-31-2023
"""
from agrovision.utils.nc_handler import NCHandler as nch
import os
from django.conf import settings
import numpy as np

class NCAnalyzer:
    """
    Analyses a netcdf file from Agro Ibis

    Attributes:
        self
    """

    def __init__(self):
        self.start_year = 1948
        nc_file = nch(settings.NC_FILE_PATH)
        self.nc_data = nc_file.open_nc_file()
        self.nc_var_data = None
        self.variable = None

    def get_nc_data(self, variable="longitude"):
        # year is a numpy masked array

        self.variable = variable
        self.nc_var_data = self.nc_data.variables[variable]
        print("using variable ", variable)

        # return self.nc_data

    def run_stat(self, stat_type="average"):
        return_data = []
        counter = self.start_year
        if stat_type == "average":
            for year in self.nc_var_data:
                # print(counter + self.start_year)
                # print(year)
                # print(year.mean())
                return_data.append({"name": str(counter), self.variable: year.mean()})
                counter = counter + 1
            print(return_data)
            return return_data
