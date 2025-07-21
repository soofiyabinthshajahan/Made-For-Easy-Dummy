import React from 'react'
import HorizontalHeader from './Header/Header'
import styled from 'styled-components'

const MainDiv = styled.div`
width:100%;
height:120vh;
background-image: url("/Static/Home Background.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center ;
`

function Home() {
  return (

      <MainDiv>
        <HorizontalHeader/>
      </MainDiv>

  )
}

export default Home
