import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PopulationScreen } from '../population/PopulationScreen';
import { CountryDetailScreen } from '../body/CountryDetailScreen';
import { HeaderScreen } from '../header/HeaderScreen';
import { About } from '../about/About';
import { NewsScreen } from '../news/NewsScreen';

export const AppRouter = () => {
    const { allCountry } = useContext(AuthContext);

    return (
        <>
            <Router>
                <HeaderScreen />
                <div>
                    <Switch>
                        {allCountry && (
                            <Route
                                exact
                                path="/"
                                component={PopulationScreen}
                            />
                        )}
                        <Route
                            exact
                            path="/country/:countryId"
                            component={CountryDetailScreen}
                        />
                        <Route exact path="/" component={PopulationScreen} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/news" component={NewsScreen} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};
