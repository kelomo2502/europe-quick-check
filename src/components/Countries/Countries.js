import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getCountries } from '../../redux/countries/countries';
import Country from '../Country/Country';
import images from '../../assets/images.png';
import './countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <>
      <Container className="map">
        <Row>
          <Col xs={6}>
            <div className="europe-image">
              <img src={images} alt="map_of_europe" />
            </div>
          </Col>
          <Col xs={6} className="right-map-column" style={{ color: '#fff', zIndex: '1' }}>
            <h3 style={{ paddingTop: '35px' }}>EUROPEAN COUNTRIES</h3>
          </Col>
        </Row>
      </Container>
      <Container className="grid-container">
        {Object.keys(countries).filter((countries) => countries.includes(countries)).map((countryId) => {
          const {
            currencies, flags, name, population,
          } = countries[countryId];
          return (
            <Country
              key={population}
              currencies={currencies}
              flags={flags}
              name={name}
              population={population}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Countries;
