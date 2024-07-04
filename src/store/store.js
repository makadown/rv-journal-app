import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice';

/**
 * Esta es mi "fuente unica de la verdad".
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer    
  },
});