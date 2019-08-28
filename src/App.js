import React, { useState, createContext, useEffect } from "react";
import Header from "./Components/Header"
import SidebarList from "./Components/SidebarList"
import MainImageContainer from "./Components/MainImageContainer"
import dayjs from 'dayjs'
import API from "./Utils/getNasaPics"

const Context = createContext()

function App() {
  const [pictureList, setPictureList] = useState()
  const [date] = useState(dayjs())

  useEffect(()=>{
    let isCurrent=true
    API.get(`neo/rest/v1/feed/?api_key=DEMO_KEY&end_date=${date.format('YYYY-MM-DD')}&start_date=${date.subtract(7, 'day').format('YYYY-MM-DD')}`)
    .then((res) => {
      setPictureList(res.data.near_earth_objects)
    })
    .catch((err)=> console.log(err))

    return ()=> {isCurrent=false}
  }, [date])

  console.log(pictureList)

  return (
    <div className="App">
      <Context.Provider value={{pictureList, setPictureList}}>
      {/* <Header />
      <SidebarList/>
      <MainImageContainer /> */}
      </Context.Provider>
    </div>
  );
}

export default App;
