/*
Redux store for AgroVision
Author: Matthew Bayles
Created: 4/12/2023
*/
import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './mainSlice'


export default configureStore({
  reducer: {
    main: mainSlice
  },
})