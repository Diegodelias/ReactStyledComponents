import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container/Index";
import GlobalStyle from "./GlobalStyle"
import { temaClaro , temaOscuro } from "./Components/UI/temas";


console.log(temaClaro , temaOscuro)
function App() {
  return (
    <ThemeProvider theme={ temaOscuro }>
     <GlobalStyle/>
      <Header />
      <Container />
    </ThemeProvider>
    
  );
}

export default App;
