import { React, useContext, useState /* useEffect */ } from 'react';
import { MenuButton } from './MenuButton';
import { NavbarWrapper } from './NavbarWrapper';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

export const HeaderScreen = () => {
    const { population } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <header className={'header__main-content'}>
            <NavbarWrapper open={open}>
                <div className="header__container-left">
                    <div className="header__container-left-title">
                        <label>WORLD</label>
                        <hr />
                        <label>POPULATION</label>
                    </div>

                    <div className="header__container-button">
                        <MenuButton open={open} handleClick={handleClick} />
                    </div>
                </div>
                <div className="header__container-center">
                    <p style={{ color: '#16ADDC', fontFamily: 'Bodoni MT' }}>
                        WORLD POPULATION:
                        <strong
                            style={{
                                color: 'white',
                                fontFamily: 'Bodoni MT',
                                marginLeft: '0.5rem',
                            }}
                        >
                            {population !== undefined &&
                                population.body.world_population.toLocaleString(
                                    'en-US'
                                )}
                        </strong>
                    </p>
                </div>
                <ul className="header__container-menu">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                        style={{ color: 'white' }}
                    >
                        HOME
                    </NavLink>
                    <hr />
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/about"
                        style={{ color: 'white' }}
                    >
                        ABOUT
                    </NavLink>
                    <hr />
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/news"
                        style={{ color: 'white' }}
                    >
                        NEWS
                    </NavLink>
                </ul>
            </NavbarWrapper>
        </header>
    );
};

/* https://javascript.plainenglish.io/how-to-create-a-responsive-navbar-with-react-bb9ce4cebddd */
