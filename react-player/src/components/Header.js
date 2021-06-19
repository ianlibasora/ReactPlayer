
import React from 'react';
import { useTheme } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default function Header() {
   const theme = useTheme()

   return (
      <div className="header" style={{backgroundColor: `${theme.palette.primary.light}`}}>
         <Typography variant="h5" style={{color: `${theme.palette.primary.contrastText}`}}>REACT PLAYER</Typography>
      </div>
   )
}
