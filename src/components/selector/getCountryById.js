import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const getCountryById = (name) => {
    const { allCountry } = useContext(AuthContext);
    return allCountry.find((country) => country.name == name);
};
