import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [pagina, setPagina] = useState(false);
  const [tarefas, setTarefas] = useState([])
  const [titulo, setTitulo] = useState('') 
  const [descricao, setDescricao] = useState('')
  
  
  function addTarefa(){
    setPagina(false)
    setTarefas([...tarefas,{titulo, descricao}])
  }

  function CardTarefa(tarefa){
    return(
      <div className='cardTarefa'>
        <p className='titulo'>{tarefa.titulo}</p>
        <p>{tarefa.descricao}</p>
      </div>
    )
  }

  function NovaTarefa(){
    return(
    <div className='segundaPagina'>
      <h1>Nova tarefa</h1>
      <h2>Titulo</h2>
      <input onChange={(e) => setTitulo(e.target.value)}/>
      <label>Descrição</label>
      <textarea onChange={(e) => setDescricao(e.target.value)}></textarea>
      <button onClick={() =>addTarefa()} >Add tarefa</button>
    </div>
    )
  }

  const paginaUm = () => {
    return (
    <div className="App">
      <h1>A fazer</h1>
      <button
      className='btnNovaTarefa'
      onClick={() => setPagina(true)}
      >Nova tarefa</button>


    <div className='container-tarefas'>
      {tarefas.map((item, index) => (
        CardTarefa(item)
      ))}
    </div>

    </div>

    )
  }
  
  return pagina ? NovaTarefa() : paginaUm()
}

export default App;
