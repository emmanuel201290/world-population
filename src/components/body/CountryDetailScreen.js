import React from 'react';
import { useParams } from 'react-router-dom';
import { getCountryById } from '../selector/getCountryById';
import GoogleMapReact from 'google-map-react';

export const CountryDetailScreen = ({ history }) => {
    const { countryId } = useParams();
    const filterCountry = getCountryById(countryId);

    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const nf = new Intl.NumberFormat();
    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    };

    const defaultProps = {
        center: {
            lat: filterCountry.latlng[0],
            lng: filterCountry.latlng[1],
        },
        zoom: 6,
    };

    return (
        <div className="body__details-country">
            <div className="row mt-5 details-country-position">
                <div className="col-4">
                    <img
                        src={filterCountry.flag}
                        alt={filterCountry.name}
                        className="card-img-top h-100 "
                    />
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    <h3> {filterCountry.name} </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b> Capital : {filterCountry.capital}</b>
                        </li>
                        <li className="list-group-item">
                            <b> Region : {filterCountry.region}</b>
                        </li>
                        <li className="list-group-item">
                            <b> Subregion: {filterCountry.subregion} </b>
                        </li>
                        <li className="list-group-item">
                            <b>Area: {filterCountry.area}</b>
                        </li>
                        <li className="list-group-item">
                            <b>Native name: {filterCountry.nativeName}</b>
                        </li>
                        <li className="list-group-item">
                            <b>Population: {filterCountry.polulation}</b>
                        </li>
                        <li className="list-group-item">
                            <b>Borders : </b>
                            {filterCountry.borders !== undefined &&
                                filterCountry.borders.map((bor) => {
                                    return bor + ' , ';
                                })}
                        </li>
                        <li className="list-group-item">
                            <b>Language : </b>
                            {filterCountry.languages.map((lng) => {
                                return lng.name + ' , ';
                            })}
                        </li>
                    </ul>
                    <hr />
                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Return
                    </button>
                </div>

                <br />
                <div
                    style={{
                        height: '32vh',
                        width: '50vw',
                        marginTop: '2rem',
                        paddddingTop: '2rem',
                    }}
                >
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyCk7pbkmNhknGumy2vgDykdgVj6lSreTt0',
                        }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={filterCountry.latlng[0]}
                            lng={filterCountry.latlng[1]}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                    <br />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '2.5rem',
                        paddingBottom: '2rem',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            backgroundColor: '#EAA961',
                            fontSize: '1.3rem',
                            width: '15rem',
                            height: '4rem',
                            alignItems: 'center',
                            borderRadius: '12px 12px 12px 12px',
                        }}
                    >
                        <strong
                            style={{
                                marginLeft: '0.7rem',
                                marginRight: '0.5rem',
                            }}
                        >{`Longitude:`}</strong>
                        {nf.format(filterCountry.latlng[0])}
                    </div>
                    <div
                        style={{
                            backgroundColor: '#EAA961',
                            fontSize: '1.3rem',
                            marginLeft: '2rem',
                            width: '15rem',
                            height: '4rem',
                            borderRadius: '12px 12px 12px 12px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <strong
                            style={{
                                marginLeft: '0.7rem',
                                marginRight: '0.5rem',
                            }}
                        >{`Latitude:`}</strong>
                        {nf.format(filterCountry.latlng[1])}
                    </div>
                </div>
            </div>
        </div>
    );
};
