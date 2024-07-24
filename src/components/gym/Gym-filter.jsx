
const GymFilter = ({ checks, handleCheckChange }) => (
  <div className='contenedor_1_gimnasios'>
    {checks.map((item, index) => (
      <div key={item.id} className='Lista-filtro'>
        <label htmlFor={item.id}>{item.text}</label>
        <input
          id={item.id}
          type="checkbox"
          checked={item.isChecked}
          onChange={() => handleCheckChange(index)}
        />
      </div>
    ))}
  </div>
);

export default GymFilter;
