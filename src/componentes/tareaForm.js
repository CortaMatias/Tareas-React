import React, {useState}from "react";
import "../style-sheets/tareaForm.css";
import {v4 as uuidv4} from "uuid";

function TareaForm (props) {

  const [input, setInput] = useState ([]);

  const manejarCambio = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const manejarEnvio = (e) => {
    e.preventDefault(); //No recarga la pagina cuando envias       
    console.log(input);
    const tareaNueva = {
      id: uuidv4(),
      texto: input,      
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

  return (
    <form 
    className="tarea-formulario"
    onSubmit={manejarEnvio}> 
        <input 
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
        />
        <button className="tarea-boton">
           Agregar Tarea
        </button>
    </form>
  );
}

export default TareaForm;