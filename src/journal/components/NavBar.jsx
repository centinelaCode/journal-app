import { LogoDevOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'

export const NavBar = ({ drawaerWidth }) => {
   return (
      <AppBar 
         position='fixed'
         sx={{
            width: { sm: `calc(100% - ${ drawaerWidth }px)` },
            ml: { sm: `${ drawaerWidth }px` }
         }}

      >
         <Toolbar>
            <IconButton
               color='inherit'
               edge='start'
               sx={{ mr: 2, display: { sm: 'none' } }}
            >
               <MenuOutlined />
            </IconButton>

            <Grid container direction='row' alignItems='center' justifyContent='space-between'>
               <Typography variant='h6' noWrap component='div'>JournalApp</Typography>

               <IconButton color='error' >
                  <LogoDevOutlined />
               </IconButton>
            </Grid>

         </Toolbar>
      </AppBar>
   )
}
