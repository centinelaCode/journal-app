import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formDate = {
  email: 'rvaldez@google.com',
  password: '123456',
  displayName: 'Raul Valdez'
}

export const RegisterPage = () => {

  //? se define que info manejara el form
  const { displayName, email, password, onInputChange, formState } = useForm(formDate)

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log(formState)
  }

  return (
    
    <AuthLayout title="Crear Cuenta">

      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Nombre Completo" 
                type="text" 
                placeholder="Tu nombre completo" 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
              />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@correo.com" 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Tu Contraseña" 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } >
              <Button
                type="submit"
                variant='contained' 
                fullWidth>Crear Cuenta
              </Button>
            </Grid>            
          </Grid>

          <Grid container direcction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Ingresar
            </Link>
            
          </Grid>

        </Grid>
      </form>

    </AuthLayout>      
  )
}
