import styled ,{keyframes, css} from 'styled-components';

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`
export const Container = styled.div`
    justify-content: center;
    display: flex;
    height: 100vh;
    svg {
        animation: ${rotate} 2s linear infinite;
    }    
`;


export const Container2 = styled.div`
    justify-content: center;
    display: flex;
    height: 100vh;
    ${props=>
        props.loading && 
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            } 
        `
    }       
`;

