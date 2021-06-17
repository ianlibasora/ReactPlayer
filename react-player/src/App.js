
import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import AudioBar from './components/AudioBar';

function App() {
	return (
		<div className="App">
			<div>
				<Typography variant="h5" gutterBottom>
			   	USER MENU SECTION
				</Typography>
			</div>
			<AudioBar/>
		</div>
	);
}

export default App;
