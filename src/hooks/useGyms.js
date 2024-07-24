import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initialGyms } from "../utils/Data-gym";

const useGyms = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [checks, setChecks] = useState([
    { id: 'estructura', isChecked: false, text: 'Estructuras' },
    { id: 'estacionamiento', isChecked: false, text: 'Estacionamiento' },
    { id: 'elevador', isChecked: false, text: 'Elevador' },
    { id: 'lacto-bar', isChecked: false, text: 'Lacto - Bar' },
    { id: 'nutricionista', isChecked: false, text: 'Nutricionista' },
    { id: 'full-kombat', isChecked: false, text: 'Full Kombat' },
    { id: 'ritmos-fitness', isChecked: false, text: 'Ritmos Fitness' },
    { id: 'rebound-xtreme', isChecked: false, text: 'Rebound Xtreme' },
    { id: 'step-z', isChecked: false, text: 'Step-Z' },
    { id: 'entrenamiento-funcional', isChecked: false, text: 'Entrenamiento Funcional' },
  ]);
  const [gyms, setGyms] = useState(initialGyms);
  const [filteredGyms, setFilteredGyms] = useState(initialGyms);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    setSearchTerm(query || "");
    if (query) {
      console.log("Búsqueda automática con término:", query);
    }
  }, [location.search]);

  useEffect(() => {
    applyFilters();
  }, [checks, searchTerm]);

  const handleCheckChange = (index) => {
    const newChecks = [...checks];
    newChecks[index].isChecked = !newChecks[index].isChecked;
    setChecks(newChecks);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilters = () => {
    let filtered = gyms;

    if (searchTerm) {
      filtered = filtered.filter(gym =>
        gym.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const selectedFilters = checks.filter(check => check.isChecked).map(check => check.text);
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(gym =>
        selectedFilters.every(filter => gym.features.includes(filter))
      );
    }

    setFilteredGyms(filtered);
  };  

  return {
    searchTerm,
    setSearchTerm,
    checks,
    handleCheckChange,
    handleInputChange,
    filteredGyms,
    applyFilters,
  };
};

export default useGyms;
