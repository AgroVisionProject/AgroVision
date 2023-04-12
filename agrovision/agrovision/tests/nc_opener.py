"""
File: nc_opener.py
Description: Handles opening netcdf files
Author: Matthew Bayles
Date: 3-31-2023
"""
from netCDF4 import Dataset


class NCOpener:
    """
    Opens a netcdf file.
    Args:
        file_path (string): file path to netcdf file

    Attributes:
        self
    """

    def __init__(self, file_path):
        self.file_path = file_path

    def open_nc_file(self):
        """
        Open file path give in class initiation
        return:
            contents of netcdf file

        """
        return Dataset(self.file_path)
