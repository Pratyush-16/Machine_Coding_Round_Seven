import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import {data} from "../Data/Data"
import { Link } from "react-router-dom";




export default function Main() {
    const { continents } = data;

    // const {state : {continents}} = useContext(DataContext)


  return (
    <div>

        <h1>Welcome to Trip Advisor</h1>
        
        <h2>Top Continents for your next holiday</h2>

        {continents.map((continent) =>

         continent.name)
         }
      
    </div>
  )
}
