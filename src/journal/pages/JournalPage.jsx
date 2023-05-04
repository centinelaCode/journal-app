import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima architecto aliquam maxime deserunt voluptatem culpa error aliquid distinctio voluptas excepturi quis, quisquam, delectus sed, illum minus rem commodi ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima architecto aliquam maxime deserunt voluptatem culpa error aliquid distinctio voluptas excepturi quis, quisquam, delectus sed, illum minus rem commodi ipsa?</Typography> */}

      {/* NothingSelectedView -> no hay nada seleccionado */}
      < NothingSelectedView />

      {/* NoteView -> seleccionado */}
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </JournalLayout>    
  )
}
