
import styled from 'styled-components'


export const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
`;

export const Boton = styled.button`
        background-color: ${props => props.verde ? "lightgreen" : "gray"};
        padding: 5px 5px 5px 5px;

    `;

export const BotonAzul = styled(Boton)`
        background-color: salmon;
    `



