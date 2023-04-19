import { Box } from "@mui/material"

const drawaerWidth = 240;

export const JournalLayout = ({ children }) => {
   return (
      <Box sx={{ diaplay: 'flex' }}>

         {/* NavBar */}

         {/* SideBar */}

         <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
         >
            {/* ToolBar */}

            { children }

         </Box>

      </Box>
   )
}
