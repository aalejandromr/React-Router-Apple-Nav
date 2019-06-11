import React, { Component } from "react";
// import AnimatedWrapper from './AnimatedWrapper';
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly; 
`

const StyledHomePage = (props) => {
    return (
      <StyledDiv className={props.className}>
        {[0, 1, 2, 3, 4].map(index => {
          return(
            <figure key={index}>
              <img src={`https://picsum.photos/100/50?random=${index}`}/>
              <p> Some Text </p>
            </figure>
          )
        })}
      </StyledDiv>
    )
}

// const Home = AnimatedWrapper(HomeComponent);
// ${props => props.theme.animations.show};
const Home = styled(StyledHomePage)`
  ${props => props.theme.animations.show};
  animation-delay: 500ms;
  opacity: 0;
  transform: translateX(-100px);
  margin: 0 40px;
  margin-top: 75px;
`
export default Home;