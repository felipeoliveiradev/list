import styled from 'styled-components';
import { IBoxStyles } from './interfaces'

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
`

export const Box = styled.div<IBoxStyles>`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

height: 100%;
flex: ${props => props.bigger ? '1' : '0 45%'};
`;