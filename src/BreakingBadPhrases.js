import React, { useState } from 'react';
import styled from '@emotion/styled';
import useFetch from './hooks/useFetch';
import Loading from './components/Loading';
import Phrase from './components/Phrase';

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 22rem;
`;

const StyledButton = styled.button`
    background: -webkit-linear-gradient( top left, #007d35 0%, #007d35 40%, #0f574e 100% );
    background-size: 300px;
    border: 1px solid #000;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    margin-top: 2.5rem;
    padding: 1rem 3rem;

    &:hover {
        background: -webkit-linear-gradient( top left, rgba(0, 128, 53, 0.5) 0%, rgba(0, 128, 53, 0.5) 40%, rgba(15, 87, 78, 0.5) 100% );
        cursor: pointer;
    }
`;

const BreakingBadPhrases = () => {
    const [ numberPhrase, setNumberPhrase ] = useState( 1 );
    const { data: phrase, loading, error } = useFetch( `https://breakingbadapi.com/api/quotes/${ numberPhrase }` );

    if( numberPhrase > 30 ) setNumberPhrase( 1 );

    const handleClick = () => {
        setNumberPhrase( numberPhrase + 1 );
    };

    return (
        <StyledContainer>
            {
                ( loading || error )
                    ?
                <Loading />
                    :
                <Phrase phrase={ phrase } />
            }

            <StyledButton onClick={ handleClick }>
                Get Phrase
            </StyledButton>
        </StyledContainer>
    );
};

export default BreakingBadPhrases;
