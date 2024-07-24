import React from "react";
import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import Novedades from "../../components/common/notification/Sending-notifications";
import GymSearchForm from "../../components/gym/Gym-search-form";
import GymFilter from "../../components/gym/Gym-filter";
import GymList from "../../components/gym/Gym-list";
import useGyms from "../../hooks/useGyms";
import '../../styles/Gimnasio.css';

const GimnasioPage = () => {
  const {
    searchTerm,
    handleInputChange,
    handleCheckChange,
    filteredGyms,
    applyFilters,
  } = useGyms();

  const handleSubmit = (event) => {
    event.preventDefault();
    applyFilters();
  };

  return (
    <div className='Container_Main'>
      <HeaderMain />
      <GymSearchForm
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <div className='contendor_principal_gym'>
        <GymFilter
          checks={useGyms().checks}
          handleCheckChange={handleCheckChange}
        />
        <GymList gyms={filteredGyms} />
      </div>
      <Novedades />
      <FooterMain />
    </div>
  );
};

export default GimnasioPage;
