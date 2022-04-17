import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import Router from 'next/router';

const BASE_ERROR = 'something went wrong';

export const addAuthErrorMessage = dispatch => (message) => dispatch({ type: 'ADD_ERROR', payload: message })
export const clearAuthErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_ERROR' });

export const startAuthing = dispatch => () => dispatch({ type: 'START_AUTHING' });
export const endAuthing = dispatch => () => dispatch({ type: 'END_AUTHING' });

export const checkAuthState = dispatch => () => {
    try {
        onAuthStateChanged(getAuth(), (user) => {
            if (!user) return dispatch({ type: 'CLEAR_USER' });
            dispatch({ type: 'SET_USER', payload: user.uid });
        })
    } catch ({ code }) {
        let message;
        switch (code) {
            default:
                message = BASE_ERROR;
        }
        dispatch({ type: 'ADD_ERROR', payload: message });
    }
}

export const signIn = dispatch => async ({ email, password }, cb) => {
    if (!email || !password) return dispatch({ type: 'ADD_ERROR', payload: 'all fields are required' });
    try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        cb();
    } catch ({ code }) {
        console.log(code);
        let message;
        switch (code) {
            case 'auth/user-not-found':
                message = 'invalid credentials';
            case 'auth/wrong-password':
                message = 'invalid credentials';
            default:
                message = BASE_ERROR;
        }
        dispatch({ type: 'ADD_ERROR', payload: message });
    };
};

export const register = dispatch => async ({ firstName, lastName, email, password, confirmPassword }, cb) => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) return dispatch({ type: 'ADD_ERROR', payload: 'all fields are required' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return dispatch({ type: 'ADD_ERROR', payload: 'invalid email' });
    // if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) return dispatch({ type: 'ADD_ERROR', payload: 'password too weak' })
    if (password !== confirmPassword) return dispatch({ type: 'ADD_ERROR', payload: 'passwords do not match' });
    try {
        const { user } = await createUserWithEmailAndPassword(getAuth(), email, password);
        await setDoc(doc(getFirestore(), 'Users', user.uid), {
            firstName,
            lastName,
            email,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
        dispatch({ type: 'REGISTER', payload: user.token });
        cb();
    } catch ({ code }) {
        console.log(code);
        let message;
        switch (code) {
            case 'auth/email-already-in-use':
                message = 'email already used';
                break;
            case 'auth/invalid-email':
                message = 'invalid email';
            case 'auth/weak-password':
                message = 'password too weak';
            default:
                message = BASE_ERROR;
        }
        dispatch({ type: 'ADD_ERROR', payload: message });
    }
}

export const logout = dispatch => async () => {
    try {
        await signOut(getAuth());
        dispatch({ type: 'CLEAR_USER' });
        Router.push('/');
    } catch ({ code }) {
        console.log(code);
        let message;
        switch (code) {
            default:
                message = BASE_ERROR
        }
        dispatch({ type: 'ADD_ERROR', payload: message });
    }
}
