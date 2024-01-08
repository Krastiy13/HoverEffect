import { useState } from "react";
import { GlobalStyle } from "./styles/GolablStyles";

import NavBar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}

export default App;
