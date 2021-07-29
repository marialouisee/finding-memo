import styled from 'styled-components'


const Buttton = styled.button`
background: ${props => props.primary ? "lightblue" : "white"};
color: ${props => props.primary ? "white" : "lightblue"};

font-size: 1em;
margin: 0.5em;
padding: 0.25em 1em;
border: 2px solid lightblue;
border-radius: 3px;
`

export default Buttton