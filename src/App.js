import React from 'react'
import { AppContext } from './context/contextApi'
import Header from "./components/Header.jsx"
import Feed from "./components/Feed.jsx"
import  LeftNav from './components/LeftNav.jsx'
import LeftNavMenuItem from './components/LeftNavMenuItem.jsx'
import SearchResult from './components/SearchResult.jsx'
import SearchResultVideoCard from './components/SearchResultVideoCard.jsx'
import SuggestionVideoCard from './components/SuggestionVideoCard.jsx'
import VideoCard from './components/VideoCard.jsx'
import VideoDetails from './components/VideoDetails.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
              <Route path='/' exact element={<Feed />}/>
              <Route path='/searchResult/:searchQuery' element={<SearchResult />}/>
              <Route path='/video/:id' element={<VideoDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
    </> 
    )
}

export default App
