import styled from '@emotion/styled';

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto;
`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 150px; // darle width en Flex (se va a encoger, se va a ensanchar y width)
        font-size: 1.8rem;
    }

    input {
        flex: 1; //toma el restante del width del label
        padding: 1rem;
    }
`;

export const InputSubmit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;

    &:hover {
        cursor: pointer;
    }
`;