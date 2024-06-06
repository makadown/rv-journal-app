import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { Typography } from '@mui/material';
import { NothingSelectedView } from '../views';


export const JournalPage = () => {
  return (
    <JournalLayout>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, fuga qui ducimus cupiditate a expedita odit placeat officiis animi veritatis totam aperiam ab voluptates eaque dolores, sint, magni atque nemo!
          </Typography> */}

          {/* NothingSelected */}
          <NothingSelectedView />
          {/* NoteView */}

    </JournalLayout>
  )
}
