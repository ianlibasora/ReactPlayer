
import React from 'react';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Slider } from '@material-ui/core';

export default function VolumeControl({value, setValue}) {
	const theme = useTheme()

	let vol
	if (value === 0) {
		vol = <VolumeOffIcon/>
	} else if (value < 50) {
		vol = <VolumeDownIcon/>
	} else {
		vol = <VolumeUpIcon/>
	}

	return (
		<div style={{color: theme.palette.primary.contrastText}}>
			<Grid container spacing={0}>
				<Grid item xs={3}>
					{vol}
				</Grid>
				<Grid item xs={9}>
					<Slider color="secondary" value={value} valueLabelDisplay="auto" onChange={(event, newValue) => setValue(newValue)} aria-label="volume control"/>
				</Grid>
			</Grid>
		</div>
	)
}
