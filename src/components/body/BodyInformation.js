import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLimit } from '../hooks/useLimit';
import { CountryCard } from './CountryCard';
import { BsSearch } from 'react-icons/bs';
import { Button, Input } from 'reactstrap';

export const BodyInformation = () => {
    const { allCountry } = useContext(AuthContext);
    const [count] = useLimit(10);
    const [limit, setLimit] = useState(count);
    const [filterCountry, setFilterCountry] = useState();
    const [txtFindCountry, setTxtFindCountry] = useState('');

    useEffect(() => {
        setLimit(count);
    }, [count]);

    const onChange = (e) => {
        const { value } = e.target;
        if (value > 1) {
            setLimit(value);
        } else {
            setLimit(1);
        }
    };

    const onChangeText = (e) => {
        const { value } = e.target;

        if (value === '') {
            findCountry();
        }
        setTxtFindCountry(value);
    };

    const findCountry = () => {
        const filterValue = allCountry.filter((value) =>
            value.name.includes(txtFindCountry)
        );

        setFilterCountry(filterValue);
    };

    return (
        <div className="body__main-stylebody ">
            <div className="body__second-navbar">
                <div className="body__container-navbar">
                    <form className="bd-show">
                        <label>Show</label>
                        <input
                            aria-label="show"
                            autoComplete="off"
                            className="form-control"
                            name="infoActive"
                            onChange={onChange}
                            type="number"
                            value={limit}
                        ></input>
                    </form>

                    <div className="bd-search">
                        <Input
                            type="search"
                            onChange={onChangeText}
                            placeholder="Filter"
                            className="input"
                            oncl
                        />
                        <Button onClick={findCountry}>
                            <BsSearch />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container mt-3 ">
                <div className="row row-cols-2 row-cols-md-4 g-2">
                    {filterCountry
                        ? filterCountry
                              .slice(0, limit)
                              .map((data) => (
                                  <CountryCard key={data.id} data={data} />
                              ))
                        : allCountry &&
                          allCountry
                              .slice(0, limit)
                              .map((data) => (
                                  <CountryCard key={data.id} data={data} />
                              ))}
                </div>
                <hr
                    style={{
                        height: '0.20rem',
                        background: '#E48312',
                    }}
                />
                <h3>Demography</h3>
                <p
                    style={{
                        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                        fontSize: '1.2rem',
                    }}
                >
                    In demography, world population is the total number of
                    people living around the world at a specific time. It is
                    determined by the births and deaths of individuals, as well
                    as by their life expectancy.
                </p>

                <br />
            </div>
        </div>
    );
};
