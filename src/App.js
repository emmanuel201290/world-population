import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { AuthContext } from './components/context/AuthContext';
import { AppRouter } from './components/routers/AppRouter';

export const App = () => {
    const [allCountry, setAllCountry] = useState();
    const [population, setPopulation] = useState();
    const [news, setNews] = useState();

    useEffect(async () => {
        try {
            Axios.all([
                Axios.get(`https://restcountries.com/v2/all`),
                Axios.get(
                    `https://world-population.p.rapidapi.com/worldpopulation`,
                    {
                        headers: {
                            'x-rapidapi-host':
                                'world-population.p.rapidapi.com',
                            'x-rapidapi-key':
                                'e435d6995emsh3f44d201236db5fp1f0278jsn4a4a162a13cb',
                        },
                    }
                ),
                Axios.get(`https://covid-19-news.p.rapidapi.com/v1/covid`, {
                    headers: {
                        'x-rapidapi-key':
                            'e435d6995emsh3f44d201236db5fp1f0278jsn4a4a162a13cb',
                        'x-rapidapi-host': 'covid-19-news.p.rapidapi.com',
                    },
                }),
            ]).then((response) => {
                setAllCountry(response[0].data);
                setPopulation(response[1].data);
                setNews(response[2].data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
            {population !== null && (
                <AuthContext.Provider
                    value={{
                        allCountry,
                        population,
                        news,
                    }}
                >
                    <AppRouter />;
                </AuthContext.Provider>
            )}
        </div>
    );
};

export default App;
