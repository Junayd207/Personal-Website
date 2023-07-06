import React from 'react'
import Particles from "./Particles/Particles"
import Content from "./Content/Content"
import './App.css'

export default function App() {
	return(
        <div>
            <Particles/>{/* This is a background element */}
            <Content/>
        </div>
    )
}

