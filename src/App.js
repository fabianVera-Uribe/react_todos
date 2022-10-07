import React, { useState } from "react";

function App() {
  const [gastos, setGastos] = useState([])

  return (
    <div>
      <Contador gastos={gastos}/>
      <GastosMes gastos={gastos}/>
      <AgregarGasto setGastos={setGastos}/>
    </div>
  );
}

function Contador ({gastos}){
  let total = 0;
  for(let i = 0; i<gastos.length; i++){
    total += parseInt(gastos[i])
  }  
  return (
  <div> Gasto mensual: {total} </div>
  )
}

function GastosMes ({gastos}){


return (
  <ul>
    {gastos.map ((gasto) =>( <li key = {gasto}>{gasto}</li>
    ))}
  </ul>
);
}

function AgregarGasto ({setGastos}) {
  function handleSubmit (event) {
    event.preventDefault ();
    const gasto = event.target.elements.gasto.value;
    setGastos(prevGastos => [...prevGastos, gasto])
    return gasto;
  }

return (
  <form onSubmit = {handleSubmit}>
    <input autoComplete="off" type = "text" id = "gasto"/>
    <button type="Submit"> Agregar gasto </button>
  </form>
)
}


export default App;
