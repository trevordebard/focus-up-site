import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlockContainer = styled.div`
    background-color: ${props => props.bgColor};
    height: 100vh;
    overflow: hidden;
`

function Block(props) {
    console.log(props)
    return (
        <BlockContainer bgColor={props.bgColor}>
            {props.children}
        </BlockContainer>
    )
}

Block.propTypes = {

}

export default Block

