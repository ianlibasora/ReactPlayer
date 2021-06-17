
import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import AudioController from './AudioController';

export default function TrackBar() {
	const theme = useTheme()

	return (
		<div className="controlBar" style={{backgroundColor: theme.palette.primary.main}}>
			<Grid container spacing={2}>
				<Grid item sm={3}>
					<Typography style={{color: theme.palette.primary.contrastText}}>AUDIO TRACK INFO</Typography>
				</Grid>
				<Grid item xs={9}>
					<AudioController/>
				</Grid>
			</Grid>
		</div>
	)
}
