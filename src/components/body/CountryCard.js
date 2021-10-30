import React from 'react';
import { Link } from 'react-router-dom';

export const CountryCard = ({ data }) => {
    return (
        <div className="col" style={{ marginBottom: '2rem', height: '10%' }}>
            <div className="card h-100">
                <img
                    src={data.flag}
                    alt={data.name}
                    className="card-img-top h-50"
                />
                <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '-1.2rem',
                        }}
                    >
                        <hr
                            style={{
                                width: '3rem',
                                height: '0.20rem',
                                background: '#40749B',
                            }}
                        />
                        <hr
                            style={{
                                width: '3rem',
                                height: '0.20rem',
                                background: '#BD582C',
                            }}
                        />
                        <hr
                            style={{
                                width: '3rem',
                                height: '0.20rem',
                                background: '#865640',
                            }}
                        />
                        <hr
                            style={{
                                width: '3rem',
                                height: '0.20rem',
                                background: '#E48312',
                            }}
                        />
                    </div>

                    <p className="card-text"> Population: {data.population}</p>
                    <p className="card-text"> Capital: {data.capital}</p>

                    <Link to={`./country/${data.name}`}>
                        More information...
                    </Link>
                </div>
            </div>
        </div>
    );
};
