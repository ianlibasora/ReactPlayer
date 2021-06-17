
import React from 'react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import VolumeControl from './VolumeControl';
import TrackControl from './TrackControl';

export default function AudioController() {
	const theme = useTheme()
	const [value, setValue] = React.useState(200)

	return (
		<div style={{color: theme.palette.primary.contrastText}}>
			<Grid container spacing={2}>
				<Grid item sm={9}>
					<TrackControl/>
				</Grid>
				<Grid item xs={3}>
					<VolumeControl value={value} setValue={setValue}/>
				</Grid>
			</Grid>
		</div>
	)
}


