import './App.css';
import Logo from "./imagenes/logo.png";
import TareaList from "./componentes/tareaList";
import "./style-sheets/tareaList.css";

function App() {

  return (
    <div className="App">
      <div className='container-logo'>
        <img src={Logo} 
        className="logo" />
      </div>
      <div className='lista-tareas'>
        <h1>Mis tareas</h1>   
        <TareaList />
      </div>
    </div>
  );
}

export default App;
