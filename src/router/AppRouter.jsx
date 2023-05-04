import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../ui'


export const AppRouter = () => {

   const { status } = useSelector( state => state.auth );

   // si el ststus es cheking entonces mostramos el loader pq hay que ver si estamos o no authenticados
   if(status === 'checking') {
      return <CheckingAuth />
   }

   return (
      <Routes>

         {/* login | registro */}
         <Route path="/auth/*" element={ <AuthRoutes /> } />

         {/* JournalApp */}
         <Route path="/*" element={ <JournalRoutes /> } />

      </Routes>
   )
}
