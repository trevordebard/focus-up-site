import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import colors from '../constants/colors'
import Fade from 'react-reveal/Fade';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck);
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${colors.primary};
    `;
const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 100vh;
    font-size: 1.8rem;
    color: ${colors.secondary};
`;
const LeftContainer = styled.div`
    grid-column-start: 1;
    background-color: ${colors.light_grey};
    display: flex;
    justify-content: center;
    ul {
        position: sticky;
        height: fit-content;
        top: 20rem;
        margin-top: 20rem;
    }
    li {
        margin-top: 20px;
    }
`;
const RightContainer = styled.div`
    grid-column-start: 2;
    background-color: hsl(184,77%,34%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const AboutItem = styled.div`
    display: block;
    text-align: center;
    img {
        height: 500px;
    }

    p {
        margin-top: -25px;
        color: ${colors.light_grey};
        font-style: italic;
        margin-bottom: 5rem;
    }
`;

function About(props) {
    return (
        <AboutContainer>
            <LeftContainer>
                <ul>
                    <li><StyledFontAwesomeIcon icon="check"/> 100% Free</li>
                    <li><StyledFontAwesomeIcon icon="check"/> Keeps you Focused</li>
                    <li><StyledFontAwesomeIcon icon="check"/> Works Across All Browsers</li>
                    <li><StyledFontAwesomeIcon icon="check"/> No Data Sent to the Cloud</li>
                </ul>
            </LeftContainer>
            <RightContainer>
                <Fade bottom>
                    <AboutItem style={{marginTop: '10rem'}}>
                        <img src="images/blocked_sites.png" alt="blocked_sites"/>
                        <p>Add the websites that you want to block.</p>
                    </AboutItem>
                </Fade>
                <Fade bottom>
                    <AboutItem>
                        <img src="images/set_timer.png" alt="blocked_sites"/>
                        <p>Set a timer for how long you want to be focused.</p>
                    </AboutItem>
                </Fade>
                <Fade bottom>
                    <AboutItem>
                        <img src="images/countdown.png" alt="blocked_sites"/>
                        <p>Focus on your work while the timer counts down.</p>
                    </AboutItem>
                </Fade>
            </RightContainer>
        </AboutContainer>
    )
}

About.propTypes = {

}

export default About

