import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
    background-color: rgba(15, 87, 78, 0.2);   
    max-width: 80%;
    padding: 3rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 2.5rem;
        position: relative;
        text-align: justify;
        word-wrap: break-word;

        &::before {
            color: #000;
            content: open-quote;
            font-size: 7rem;
            left: -1rem;
            position: absolute;
            top: -2rem;
        }
    }

    p {
        color: #fff;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        margin-top: 2rem;
        text-align: right;
    }
`;

const Phrase = ( { phrase } ) => {
    const { quote, author } = phrase.length > 0 && phrase[ 0 ];

    return (
        <StyledContainer>
            <h1>{ quote }</h1>
            <p>- { author }</p>
        </StyledContainer>
    );
};

Phrase.propTypes = {
    phrase: PropTypes.array.isRequired
};

export default Phrase;
