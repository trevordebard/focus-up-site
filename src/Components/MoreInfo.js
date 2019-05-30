import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import colors from '../constants/colors'
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
    height: 100%;
    font-size: 1.8rem;
    color: ${colors.secondary};
`;
const LeftContainer = styled.div`
    grid-column-start: 1;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    
    li {
        margin-top: 20px;
    }
`;
const RightContainer = styled.div`
    grid-column-start: 2;
    background-color: hsl(209, 23%, 60%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MoreInfo(props) {
    return (
        <AboutContainer>
            <LeftContainer>
                <ul>
                    <li><StyledFontAwesomeIcon icon="check"/> 100% Free</li>
                    <li><StyledFontAwesomeIcon icon="check"/> Blocks the Websites You Want to Block</li>
                    <li><StyledFontAwesomeIcon icon="check"/> Works Across All Browsers</li>
                    <li><StyledFontAwesomeIcon icon="check"/> No Data Sent to the Cloud</li>
                </ul>
            </LeftContainer>
            <RightContainer>
                <h1>wtf</h1>
            </RightContainer>
        </AboutContainer>
    )
}

MoreInfo.propTypes = {

}

export default MoreInfo

