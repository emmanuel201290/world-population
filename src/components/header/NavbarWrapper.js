import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    transition: height 0.2s linear;

    @media (max-width: 768px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: ${(props) => (!props.open ? '5rem' : '50vh')};
        overflow: ${(props) => (!props.open ? 'hidden' : 'auto')};
        width: 100vw;
    }

    @media only screen and (min-width: 768px) {
        align-items: center;
        display: flex;

        /*Align all items with the same size*/
        div {
            flex: auto;
        }
    }
`;
