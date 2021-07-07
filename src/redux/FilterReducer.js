import {handleChange} from './app-actions';
import { createReducer } from "@reduxjs/toolkit";

const FilterReducer = createReducer('', {
    [handleChange]: (_, {payload})=> payload,
  })


  export {FilterReducer};