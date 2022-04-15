import React, {useState} from 'react'


export const Contador = (initial = 0) => {

  const [contador, setContador ] = useState( initial = 0)

  const handleSuma = () => {
    setContador(contador + 1)
  }

  const handleResta = () => {
    setContador(contador - 1)
  }

  const handleReset = () => {
    setContador( initial )
  }

  return (
    <div className='container'>
        <h2>Contador</h2>
        <div className='box'>
          <button onClick={ handleResta }> - </button>
          <p>Clikeaste { contador } </p>
          <button onClick={ handleReset }> Reset </button>
          <button onClick={ handleSuma }> + </button>
        </div>
    </div>
  )
}
