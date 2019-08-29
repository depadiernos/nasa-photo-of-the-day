import React, { useState, createContext, useEffect, useContext } from "react";
import Header from "./Components/Header"
import MainImageContainer from "./Components/MainImageContainer"
import PrevNextButton from './Components/PrevNextButton'
import dayjs from 'dayjs'
import API from "./Utils/getNasaPics"

const Context = createContext()

function App() {
  const [pictureList, setPictureList] = useState([])
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))

  useEffect(() => {
    let exists = false
    pictureList.map((picture) => {
      if (picture.date === date) { exists = true }
    })
    console.log(exists)
    if (!exists) {
      API.get(`/planetary/apod?api_key=EkatzOmEYV1OwStfQKkZaRnQVdmCvnBd4TvMLHwr&date=${date}`)
      .then((res) => {
        setPictureList(list => [...list, res.data])
      })
      .catch((err) => console.log(err))
    }
  }, [date])

  return (
    <div className="App">
      <Context.Provider value={{ pictureList, setPictureList, date, setDate }}>
        <Header />
        <PrevNextButton nav='prev' onClick={() => { setDate(dayjs(date).add(`-1`, 'days').format('YYYY-MM-DD')) }} />
        <MainImageContainer />
        <PrevNextButton nav='next' onClick={() => { setDate(dayjs(date).add(`1`, 'days').format('YYYY-MM-DD')) }} />
      </Context.Provider>
    </div>
  );
}

export function useAppContext() {
  return useContext(Context)
}
export default App;
