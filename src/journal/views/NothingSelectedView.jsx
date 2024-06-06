import React from 'react';
import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: 'primary.main', borderRadius: 5 }}
        >
            <Grid item xs={ 12 }>
                <StarOutline sx={{ fontSize: 75, color: 'white' }} />
            </Grid>
            <Grid item xs={ 12 }>
                <Typography color={ 'white' } variant="h5" sx={{ mb: 1 }}>
                    Select or create an entry
                </Typography>

            </Grid>
        </Grid>
    )
}
