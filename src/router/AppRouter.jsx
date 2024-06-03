import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";


/**
 * This is the main router.
 * Este es el mero mero router macizo.
 * @author Mario Serrano
 * @returns 
 */
export const AppRouter = () => {
  return (
    
        <Routes>
            {/* Login and signup */}
            <Route path="auth/*" element={<AuthRoutes />} />

            {/* Journal App */}
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    
  )
}
