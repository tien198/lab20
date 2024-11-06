import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

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

export function logout() {
    signOut(auth)
}

export async function isLoggedIn() {
    let isLoggedIn = false
    await onAuthStateChanged(auth, user => {
        if (user)
            isLoggedIn = true
        else
            isLoggedIn = false
    })
    return isLoggedIn
}
