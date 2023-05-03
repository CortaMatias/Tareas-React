import React, {useState} from "react";
import TareaForm from "./tareaForm";
import Tarea from "./tarea";
import "../style-sheets/tareaList.css";


function TareaList (){

  const [tareas, setTareas] = useState([]);

  const addTarea = (tarea) => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const removeTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea =>tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TareaForm onSubmit={addTarea}/>
      <div className="tarea-lista-contenedor">     
        {
          
          tareas.map((tarea) => 
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto} 
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={removeTarea}
            /> )          
        }
      </div>
    </>
  );
}

export default TareaList;