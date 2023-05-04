import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'


export const AppRouter = () => {

   // usamos el custum hook useCheckingAuth   
   const { status } = useCheckAuth();

   // si el ststus es cheking entonces mostramos el loader pq hay que ver si estamos o no authenticados
   if(status === 'checking') {
      return <CheckingAuth />
   }

   return (
      <Routes>

         {
            (status === 'authenticated')
            ? <Route path="/*" element={ <JournalRoutes /> } />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
         }

         <Route path="/*" element={ <Navigate to="/auth/login" /> } />

         {/* login | registro */}
         {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

         {/* JournalApp */}
         {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

      </Routes>
   )
}
