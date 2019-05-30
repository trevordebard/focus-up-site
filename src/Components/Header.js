import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import colors from '../constants/colors'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    height: 100vh;
    background-image:
    linear-gradient(
      to right, 
      #e9e9e9, hsl(210, 36%, 97%)
    );
    height: 100vh;
`;
const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    max-width: 250px;
    text-align: center;
`;
const Image = styled.img`
    max-width: 60%;
    height: auto;
`;

const DefaultButton = styled.button`
    color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    border-radius: 3px;
    padding: 0.6em 1em;
    display: inline-block;
    font-size: 1em;
    margin: 5px;

    cursor: pointer;
    box-shadow: inset 0 0 0 0 ${colors.secondary};
    transition: ease-out 0.3s;
    :hover {
        box-shadow: inset 400px 0 0 0 ${colors.secondary};
        color: white;
    }
    
`;
const Tagline = styled.p`
    font-size: 1.6rem;
    color: ${colors.secondary};
    align-self: flex-end;
    margin-bottom: 25px;
`;
function Header(props) {
    return (
        <HeaderContainer>
            <Image src="promo.png" alt="app-screenshot"></Image>
            <MainInfo>
                <h1 style={{ color: "hsl(184,77%,34%)", fontWeight: "600" }}>Focus Up</h1>
                <p style={{ color: "hsl(209, 28%, 39%)" }}>Set a timer. Block distracting sites.</p>
                <span>
                    <DefaultButton type="button">Download</DefaultButton>
                    <DefaultButton type="button">Learn More</DefaultButton>
                </span>
            </MainInfo>
            <Tagline>Block the websites that distract you for as long as you want so that you can stay focused</Tagline>
        </HeaderContainer>
    )
}

Header.propTypes = {

}

export default Header

