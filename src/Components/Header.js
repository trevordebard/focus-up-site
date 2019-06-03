import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import colors from '../constants/colors'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ScrollTo } from "react-scroll-to";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    background-image:
    linear-gradient(
      to right, 
      #e9e9e9, hsl(210, 36%, 97%)
    );
    height: 100vh;
    @media (max-width: 480px) {
        flex-flow: column nowrap;
        justify-content: flex-start;
    }

`;
const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
        font-size: 30px;
    }
    p {
        font-size: 1.7rem;
    }
`;
const ImageContainer = styled.div`
    max-width: 60%;
    height: auto;
    img {
        max-height: 550px;
    }
    @media (max-width: 480px) {
        max-width: 100%;
    }
`;

const DefaultButton = styled.button`
    color: ${colors.secondary};
    background-color: white;
    border: 2px solid ${colors.secondary};
    border-radius: 3px;
    padding: 0.6em 1em;
    display: inline-block;
    margin: 5px;
    width: 120px;
    font-size: 16px;
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
    margin-bottom: 10px;
    @media (max-width: 480px) {
        position: absolute;
        bottom: 0;
        margin-bottom: 0px;
    }
`;
function Header({about}) {
    return (
        <HeaderContainer>
            <ImageContainer>    
                <LazyLoadImage
                    src="layered_promo.png"
                    effect="blur"
                    alt="app-screenshot"
                />
            </ImageContainer>
            <MainInfo >
                <h1 style={{ color: "hsl(184,77%,34%)", fontWeight: "600" }}>Focus Up</h1>
                <p style={{ color: "hsl(209, 28%, 39%)" }}>Set a timer. Block distracting sites.</p>
                <span>
                    <a href="Focus-Up-0.1.0.zip" download><DefaultButton type="button">Download</DefaultButton></a>
                    <ScrollTo>
                        {({ scrollTo }) => {
                            return(
                                <DefaultButton onClick={() => scrollTo({ y: window.scrollY + window.innerHeight, smooth: true })} type="button">Learn More</DefaultButton>
                            )
                        }
                        }
                    </ScrollTo>
                </span>
            </MainInfo>
            <Tagline>Block the websites that distract you for as long as you want so that you can stay focused</Tagline>
        </HeaderContainer>
    )
}

Header.propTypes = {

}

export default Header

