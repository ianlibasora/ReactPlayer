
import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { useState } from 'react';

import TrackBar from './components/TrackBar';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
   const theme = useTheme()
   const [value, setValue] = useState(200)
   const [trackTime, setTrackTime] = useState(0)
   let [trackList, trackListHook] = useState([])
   let [trackQueue, trackQueueHook] = useState([])

   return (
      <div className="App">
         <Header/>

         <div className="menuContainer" style={{color: `${theme.palette.primary.contrastText}`}}>
            <Grid container justify="center" alignItems="stretch">
               <Grid item>
                  <Menu trackList={trackList} trackListHook={trackListHook}/>
               </Grid>
            </Grid>
         </div>

         <TrackBar value={value} setValue={setValue} trackTime={trackTime} setTrackTime={setTrackTime}/>
      </div>
   );
}

export default App;
