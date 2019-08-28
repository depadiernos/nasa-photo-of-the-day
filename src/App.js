import React, { useState, createContext } from "react";
import Header from "./Components/Header"
import SidebarList from "./Components/SidebarList"
import MainImageContainer from "./Components/MainImageContainer"
import API from "./Utils/getNasaPics"

const Context = createContext()

function App() {
  const [pictureList, setPictureList] = useState([])



  return (
    <div className="App">
      <Context.Provider value={{pictureList, setPictureList}}>
      <Header />
      <SidebarList/>
      <MainImageContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
