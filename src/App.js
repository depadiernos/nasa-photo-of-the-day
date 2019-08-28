import React, { useState, createContext, useEffect, useContext } from "react";
import Header from "./Components/Header"
import MainImageContainer from "./Components/MainImageContainer"
import dayjs from 'dayjs'
import API from "./Utils/getNasaPics"

const Context = createContext()

function App() {
  const [picture, setPicture] = useState()
  const [date] = useState(dayjs())

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let isCurrent = true
    API.get(`planetary/apod?api_key=DEMO_KEY&date=${date.format('YYYY-MM-DD')}`)
      .then((res) => {
        setPicture(res.data)
      })
      .catch((err) => console.log(err))
    return () => { isCurrent = false }
  }, [date])

  return (
    <div className="App">
      <Context.Provider value={{ picture, setPicture }}>
        <Header />
        <MainImageContainer />
      </Context.Provider>
    </div>
  );
}

export function useAppContext(){
  return useContext(Context)
}
export default App;
