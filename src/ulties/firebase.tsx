import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, reauthenticateWithRedirect } from 'firebase/auth'
import { json } from 'react-router-dom'

const app = initializeApp({
    apiKey: "AIzaSyDczDBI1CkQi_aCQQAWnx51oSLWCgumKDM",
    authDomain: "httprequestproj.firebaseapp.com",
    databaseURL: "https://httprequestproj-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "httprequestproj",
    storageBucket: "httprequestproj.firebasestorage.app",
    messagingSenderId: "817077328917",
    appId: "1:817077328917:web:a7def1023fad1b34cf821c",
    measurementId: "G-W42DQTDSV3"
})

const auth = getAuth(app)

export async function loginWithEmailPassword(emailVal: string, passwordVal: string) {
    const useCredential = await signInWithEmailAndPassword(auth, emailVal, passwordVal)
    return useCredential.user
}

export async function registerWithEmailPassword(emailVal: string, passwordVal: string) {
    const useCredential = await createUserWithEmailAndPassword(auth, emailVal, passwordVal)
    return useCredential.user
}

export async function logout() {
    await signOut(auth)
}

export async function isLoggedIn() {
    let useCredential: any
    await onAuthStateChanged(auth, user => useCredential = user)
    return useCredential
}

export async function isAuthenLoader() {
    const userCredential = await isLoggedIn()
    if (!userCredential)
        throw json({ message: 'You need to sign in to verify your permission!' }, { status: 401 })
    else
        return userCredential
}