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
    pictureList.forEach((picture) => {
      (picture.date === date) && (exists = true)
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

  const handleClick = (days) => {
    setDate(dayjs(date).add(`${days}`, 'days').format('YYYY-MM-DD'))
  }

  const isDisabled = date === dayjs().format('YYYY-MM-DD')

  return (
    <div className="App">
      <Context.Provider value={{ pictureList, setPictureList, date, setDate }}>
        <Header />
        <PrevNextButton nav='prev' onClick={() => { handleClick(-1) }} />
        <MainImageContainer />
        <PrevNextButton nav='next' onClick={() => { handleClick(1) }} disabled={isDisabled} />
      </Context.Provider>
    </div>
  );
}

export function useAppContext() {
  return useContext(Context)
}
export default App;
