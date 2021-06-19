import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';

import Container from './components/Container'
import Wrapper from './components/Wrapper'
import FirstView from './views/FirstView'

class App extends Component {
  render() {

    const evenTheme = {
      primaryColor: "#ff5959",
      secondaryColor: "papayawhip",
    }
    const oddTheme = {
      primaryColor: "red",
      secondaryColor: "gray",
    }

    return (
      <ThemeProvider theme={evenTheme}>
        <Wrapper display={"inline"}>
          <FirstView theme={evenTheme} />
          <ThemeProvider theme={oddTheme}>
            <Container fullScreen />
          </ThemeProvider >
        </Wrapper>
      </ThemeProvider >
    )
  }
}

export default App
