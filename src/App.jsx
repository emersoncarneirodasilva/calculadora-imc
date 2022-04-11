import { useState } from 'react';
import './app.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('')

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 17) {
      setMensagem("Você está MUITO abaixo do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc <= 18.49) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 18.5 && imc < 24.99) {
      setMensagem("Você está com peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 25 && imc < 29.99) {
      setMensagem("Você está acima do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc > 30 && imc < 34.99) {
      setMensagem("Cuidado, Obesidade (I)! Seu IMC: " + imc.toFixed(2))
    } else if (imc > 35 && imc < 39.99) {
      setMensagem("Cuidado, Obesidade (II)!! Seu IMC: " + imc.toFixed(2))
    } else {
      setMensagem("Cuidado, Obesidade (III) (Mórbida)!!! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      
      <div className="app-int">

      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input type="number" placeholder="Peso em (kg) Ex: 90" value={peso} onChange={(e) => setPeso(e.target.value)} />
        <input type="number" placeholder="Altura em (cm) Ex: 180" value={altura} onChange={(e) => setAltura(e.target.value)} />
        <button onClick={calcularIMC}>Calcular</button>
      </div> 

      <h2>{mensagem}</h2> 

      </div>

    </div>
  )
}

export default App