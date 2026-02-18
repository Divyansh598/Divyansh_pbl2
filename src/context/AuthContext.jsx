import React, { createContext, useContext, useState } from 'react'

// ---------------------------------------------------------------
// Demo credentials — in a real app these would be server-validated
// ---------------------------------------------------------------
const DEMO_USERS = {
    user: { email: 'user@moodwatch.app', password: 'watch123', role: 'user', name: 'Alex' },
    admin: { email: 'admin@moodwatch.app', password: 'admin123', role: 'admin', name: 'Admin' },
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const saved = sessionStorage.getItem('moodwatch_user')
            return saved ? JSON.parse(saved) : null
        } catch {
            return null
        }
    })

    const login = (email, password) => {
        const match = Object.values(DEMO_USERS).find(
            (u) => u.email === email && u.password === password
        )
        if (!match) throw new Error('Invalid email or password.')
        const { password: _, ...safeUser } = match
        setCurrentUser(safeUser)
        sessionStorage.setItem('moodwatch_user', JSON.stringify(safeUser))
        return safeUser
    }

    const logout = () => {
        setCurrentUser(null)
        sessionStorage.removeItem('moodwatch_user')
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, isAdmin: currentUser?.role === 'admin' }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
    return ctx
}
