import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima architecto aliquam maxime deserunt voluptatem culpa error aliquid distinctio voluptas excepturi quis, quisquam, delectus sed, illum minus rem commodi ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima architecto aliquam maxime deserunt voluptatem culpa error aliquid distinctio voluptas excepturi quis, quisquam, delectus sed, illum minus rem commodi ipsa?</Typography> */}

      {/* NothingSelectedView -> no hay nada seleccionado */}
      {/* < NothingSelectedView /> */}

      {/* NoteView -> seleccionado */}
      <NoteView />

    </JournalLayout>    
  )
}
