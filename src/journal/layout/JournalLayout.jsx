import { Box } from "@mui/material"
import { NavBar } from "../components";

const drawaerWidth = 240;

export const JournalLayout = ({ children }) => {
   return (
      <Box sx={{ diaplay: 'flex' }}>

         <NavBar drawaerWidth={ drawaerWidth } />

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
