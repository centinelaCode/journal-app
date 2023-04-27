import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
// import { firebaseConfig } from './firebase/config'



export const JournalApp = () => {
  // console.log(firebaseConfig)
  return (
   <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
   </>
  )
}
