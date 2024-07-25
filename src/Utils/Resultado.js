

const Resultado = ({ imc, porcentajeGrasa }) => {
  return (
    <div>
      <h2>Resultados</h2>
      <p>IMC: {imc}</p>
      <p>Porcentaje de grasa corporal: {porcentajeGrasa}%</p>
    </div>
  );
};

export default Resultado;
