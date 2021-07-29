import styled from 'styled-components'
import img from './fish.jpeg'

const Container = styled.div`
    background-image: url(${img});
    background-size: cover;
   
`

const ContainerHeader = styled(Container)`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center
`

export  {Container, ContainerHeader}