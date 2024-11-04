import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Totem from './pages/totem/totem'
import SitefForm from './pages/payments/sitefForm'
import AccessControls from './pages/access-controls/access-controls'
import Handbook from './pages/handbook/handbook'
import VideoTutorials from './pages/videos-tutorials/videos-tutorials'

export default function AppRoutes () {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Totem/>}/>
                <Route exact path='/sitef' element={<SitefForm/>}/>
                <Route exact path='/handbook' element={<Handbook/>}/>
                <Route exact path='/videos-tutorials' element={<VideoTutorials/>}/>
                <Route exact path='/access-controls' element={<AccessControls/>}/>
            </Routes>
        </Router>
    )
}