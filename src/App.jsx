import { useState } from 'react'
import './App.css'
import Table from "./Table.jsx";
import CartableByExtComponent from "./Columns.jsx";


function App() {
    const [count, setCount] = useState(0)
    const modelsheader = ['id', 'model', 'type'];
    const modelsbody = [
        [1, 'Corsa', 'small'],
        [2, 'Astra', 'family'],
        [3, 'Mokka', 'SUV'],
        [4, 'Movano', 'transporter']];


    return (
        <div>

            <CartableByExtComponent/>
        </div>
    )
}

export default App