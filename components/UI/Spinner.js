import React from 'react';
import styled from '@emotion/styled';

const SpinnerContainer = styled.div`
    width: 100%auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = () => {
    return ( 
        <SpinnerContainer>
            <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            </div>
        </SpinnerContainer>
     );
}
 
export default Spinner;