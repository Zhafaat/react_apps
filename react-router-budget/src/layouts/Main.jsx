import React from 'react'

// rrd import
import {Outlet, useLoaderData} from "react-router-dom"

// assets
import wafe from '../assets/wave.svg'

// components
import Nav from '../components/Nav';

// helper functions
import { fetchData } from '../helpers'

// loader
export function mainLoader() {
    const userName = fetchData("userName"); 
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()

  return (
    <div className="layout">
        <Nav userName={userName}/>
        <main>
          <Outlet />
        </main>
        <img src={wafe} alt="" />
    </div>
  )
}

export default Main