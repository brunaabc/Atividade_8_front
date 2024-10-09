import React, { useState } from 'react'

const CalculadoraIMC = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");

    console.log(weight, height);

    const calculateImc = () => {
        const imc = weight / (height * height);
        const formattedImc = imc.toFixed(2);
        setResult(+formattedImc);
    }

  return ( 
    <div>
        <input
        type='number'
        value={weight}
        onChange={(e) => setWeight(+e.target.value)}
        placeholder='Peso (kg)'
        />
        <p><input
        type='number'
        value={height}
        onChange={(e) => setHeight(+e.target.value)}
        placeholder='Altura (m)'
        /></p>
        <p><button onClick={calculateImc}>Calcular</button></p>
       
        <h2>Seu IMC é: {result}</h2>
    </div>
  )
}

export default CalculadoraIMC;
