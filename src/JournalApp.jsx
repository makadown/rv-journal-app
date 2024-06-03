import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';

/**
 * Este es el componente principal.
 * This is our main component.
 * @author Mario Serrano
 * @returns 
 */
export const JournalApp = () => {
  return (
    <>
        <AppTheme>
            <AppRouter />
        </AppTheme>
    </>
  )
}
