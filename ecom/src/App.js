import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Women from "./Pages/Women";
import Men from "./Pages/Mens";
import Kids from "./Pages/Kids";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Cardsdetails from "./Data/Cardsdetails";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Mens from "./Pages/Mens";

function App() {

  const [search, setsearch] = useState("")
  const [darkmode, setdarkmode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkmode ? "dark" : "light"
    },
  });

  return (

    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline /> 


        <BrowserRouter>
          <Navbar search={search} setsearch={setsearch} check={darkmode} change={()=>setdarkmode(!darkmode)}  theme={darkTheme} />
          <Routes>
            <Route path="/" element={<Home search={search}  check={darkmode} change={()=>setdarkmode(!darkmode)}  theme={darkTheme}/>}></Route>
            <Route path="Women" element={<Women search={search}/>}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="Signup" element={<Signup />}></Route>
            <Route path="Mens" element={<Mens  search={search} />}></Route>
            <Route path="Kids" element={<Kids  search={search} />}></Route>
            <Route path="/cart/:id" element={<Cardsdetails />}></Route>

          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
