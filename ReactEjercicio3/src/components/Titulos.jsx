import { useState } from "react";

const Titulos = () => {

    // crear un State
   const [estado, setEstado]  = useState("From changed State")
   // numero = numero +1  !!! NO SE PUEDE
   // se asigna con setNumero ej: 
  return (
    <section>
      <h2>Hola mi amigo!</h2>
      <h3>{estado}</h3>
      <button onClick={()=> setEstado("Cambio el Estado")}>Cambiar</button>
      <button className="btn-primary" onClick={()=> setEstado("From Changed State")}>Volver como estaba</button>
    </section>
  );
};

export default Titulos;
