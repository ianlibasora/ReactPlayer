
import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import TrackBar from './components/TrackBar';

function App() {
	return (
		<div className="App">
			<Grid container justify="center" alignItems="stretch">
				<Grid item>
					<Typography>HELLO WORLD</Typography>
				</Grid>
			</Grid>

			<TrackBar/>
		</div>
	);
}

export default App;
