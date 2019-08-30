import React, { useState, createContext, useEffect, useContext } from "react";
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Components/Header"
import ImageContainer from "./Components/ImageContainer"
import PrevNextButton from './Components/PrevNextButton'
import API from "./Utils/getNasaPics"

const Context = createContext()

function App() {
  const [pictureList, setPictureList] = useState([])
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [selectedDate] = useState(new Date())

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  const handleClick = (days) => {
    setDate(dayjs(date).add(`${days}`, 'days').format('YYYY-MM-DD'))
  }

  const isDisabled = date === dayjs().format('YYYY-MM-DD')

  return (
    <div className="App">
      <Context.Provider value={{ pictureList, setPictureList, date, setDate }}>
        <Header>
          <h1>Astronomy Picture of the Day</h1>
          <div>
            <PrevNextButton nav='prev' onClick={() => { handleClick(-1) }} />
            <DatePicker dateFormat='yyyy-MM-dd' selected={selectedDate} onChange={newDate => setDate(dayjs(newDate).format('YYYY-MM-DD'))}></DatePicker>
            <PrevNextButton nav='next' onClick={() => { handleClick(1) }} disabled={isDisabled} />
          </div>
          {console.log(date)}
        </Header>
        <ImageContainer />
      </Context.Provider>
    </div>
  );
}

export function useAppContext() {
  return useContext(Context)
}
export default App;
