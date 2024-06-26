import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 280;


export const JournalLayout = ({children}) => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>

                {/* Navbar drawerWidth */}
                <NavBar drawerWidth={drawerWidth}></NavBar>

                {/* Sidebar (drawer) drawerWidth */}
                <SideBar drawerWidth={drawerWidth}></SideBar>

                <Box component='main'
                    sx={{ flexGrow: 1, p: 3 }}
                >

                    {/* Toolbar */}
                    <Toolbar />

                    {children}
                </Box>

            </Box>
        </>
    )
}
