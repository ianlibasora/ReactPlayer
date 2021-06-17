
import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import TrackBar from './components/TrackBar';

function App() {
	return (
		<div className="App">
			<div>
				<Typography variant="h5" gutterBottom>
			   	USER MENU SECTION
				</Typography>
			</div>
			<TrackBar/>
		</div>
	);
}

export default App;
