import React, { Component } from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly; 
`

class StyledSubpage extends Component {
  render() {
    return (
      <StyledDiv className={this.props.className}>
        {[5, 6, 7, 8].map(index => {
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
}

// const Subpage = AnimatedWrapper(SubpageComponent);
const Subpage = styled(StyledSubpage)`
  ${props => props.theme.animations.show};
  animation-delay: 500ms;
  opacity: 0;
  transform: translateX(-100px);
  margin: 0 40px;
  margin-top: 75px;
`


export default Subpage;