import React from 'react';
import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title ='' }) => {
    return (
        <>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
            >
                <Grid item
                    className="box-shadow"
                    xs={3}
                    sx={{
                        width: { sm: 450 },
                        backgroundColor: 'white',
                        borderColor: 'black',
                        padding: 3,
                        borderRadius: 2
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2}}> Journal App {title}</Typography>
                    {
                        /* Login / Register form or any other form  */
                        children
                    }

                </Grid>
            </Grid>
        </>
    )
}
