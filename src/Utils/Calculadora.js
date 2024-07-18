import { useState } from "react";

const Calculadora = ({ calcularResultados }) => {
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");

  const handleCalcular = () => {
    calcularResultados(parseFloat(peso), parseFloat(estatura));
  };

  return (
    <div>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso (kg)"
      />
      <input
        type="number"
        value={estatura}
        onChange={(e) => setEstatura(e.target.value)}
        placeholder="Estatura (m)"
      />
      <button onClick={handleCalcular}>Calcular</button>
    </div>
  );
};

export default Calculadora;
