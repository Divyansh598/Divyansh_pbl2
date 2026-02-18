import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import WatchlistPage from './pages/WatchlistPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public standalone page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin — protected, no shared layout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        {/* Main app with shared layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="watchlist" element={<WatchlistPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
