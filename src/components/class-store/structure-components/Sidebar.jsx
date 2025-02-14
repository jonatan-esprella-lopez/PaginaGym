
const Sidebar = () => {
  return (
    <aside className="filters">
      <h2>Mostrar solamente</h2>
      <label><input type="checkbox"   /> Presencial</label>
      <label><input type="checkbox"   /> Livestream</label>
      <label><input type="checkbox"   /> Entrenamiento con licencia</label>

      <h2>Rangos de un Alumno</h2>
      <div className="qualifications">
        <div className="qualification">B1</div>
        <div className="qualification">K</div>
        <div className="qualification">G</div>
        <div className="qualification">Ü</div>
      </div>
    </aside>
  );
};

export default Sidebar;
