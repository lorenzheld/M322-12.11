import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Table({modelsheader, modelsbody}) {
    return(
        <table>
            <thead>
            <tr>
                {modelsheader.map((header, index) => <th key={index}>{header}</th>)}
            </tr>
            </thead>
            <tbody>
            {modelsbody.map((row, rowid) => (
                <tr key={rowid}>
                    {row.map((value, valueid) => <td key={valueid}>{value}</td>)}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;