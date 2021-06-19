
import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import TrackBar from './components/TrackBar';
import Header from './components/Header';

function App() {
   const theme = useTheme()

   return (
      <div className="App">
         <Header/>

         <div className="menu" style={{color: `${theme.palette.primary.contrastText}`}}>
            <Grid container justify="center" alignItems="stretch">
               <Grid item>
                  <Typography>HELLO WORLD</Typography>
               </Grid>
            </Grid>
         </div>

         <TrackBar/>
      </div>
   );
}

export default App;
