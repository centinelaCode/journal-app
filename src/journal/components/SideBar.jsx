import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, Grid, ListItemText } from '@mui/material'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0} }}
    >

      <Drawer
         variant='permanent'  // temporaly
         open
         sx={{             
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
         }}
      >
         <Toolbar>
            <Typography variant='h6' noWrap component='div' >
               Raul Valdez Piedra 
            </Typography>
         </Toolbar>

         <Divider />

         

         <List>
            {
               ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                  <ListItem key={text} disablePadding>
                     <ListItemButton>  {/* para que se pueda hacer click en el */}
                        <ListItemIcon>
                           <TurnedInNot />
                        </ListItemIcon>
                        <Grid container> 
                           <ListItemText primary={ text } />
                           <ListItemText secondary={ 'Lorem ipsum dolor sit amet consectetur elit.' } />
                        </Grid>                        
                     </ListItemButton>
                  </ListItem>   
               ))
            }
         </List>

      </Drawer>

    </Box>
  )
}
