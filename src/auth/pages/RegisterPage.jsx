import React from 'react';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as myLink} from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
        <AuthLayout title="Register">
          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField type="text" label="Full Name" variant="filled" fullWidth placeholder='Full Name' />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField type="email" label="Email" variant="filled" fullWidth placeholder='Email' />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField type="password" label="Password" variant="filled" fullWidth />
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>
                    Create Account
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                <Link component={myLink} color="inherit" to="/auth/login">
                  Login
                </Link>
              </Grid>


            </Grid>
          </form>
        </AuthLayout>
    </>
  )
}
