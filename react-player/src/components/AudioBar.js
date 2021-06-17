
import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

export default function AudioBar() {
	const theme = useTheme()

	return (
		<div className="controlBar" style={{backgroundColor: theme.palette.primary.main}}>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Typography style={{color: theme.palette.primary.contrastText}}>AUDIO TRACK INFO</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography style={{color: theme.palette.primary.contrastText}}>TRACK PLAY CONTROLS</Typography>
				</Grid>
				<Grid item xs={4}>				
					<Typography style={{color: theme.palette.primary.contrastText}}>VOLUME BAR</Typography>
				</Grid>
			</Grid>
		</div>
	)
}
