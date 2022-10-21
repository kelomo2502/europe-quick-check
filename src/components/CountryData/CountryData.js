import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from '../../redux/countries/countries';

const CountryData = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries.countries);
  useEffect(() => {
    dispatch(getCountry(country));
  }, []);
  const {
    name, population, capital, flags, landlocked, area, timezones, languages, status,
  } = data[0];
  return (
    <>
      <Card className="country-data">
        <Card.Img variant="top" src={flags.png} />
        <Card.Body className="country-details">
          <Card.Title className="color1 light-pink">{`Country: ${name.common}`}</Card.Title>
          <Card.Text className=" dark-pink">{`Population: ${population}`}</Card.Text>
          <Card.Text className="color1 light-pink">{`Capital City: ${capital[0]}`}</Card.Text>
          <Card.Text className="color1 dark-pink">{`Landlocked: ${landlocked ? 'Yes' : 'No'}`}</Card.Text>
          <Card.Text className="color1 light-pink">{`Area(M2): ${area}`}</Card.Text>
          <Card.Text className="color1 dark-pink">{`Status: ${status}`}</Card.Text>
          <Card.Text className="color1 light-pink">{`Languages: ${languages.eng}`}</Card.Text>
          <Card.Text className="color1 dark-pink">{`Timezone: ${timezones}`}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CountryData;
