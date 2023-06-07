import axios from 'axios';
import { API_KEY } from '@env';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

const AUTHENTICATE_MODE = {
    createUser: 'signUp',
    login: 'signInWithPassword',
};

async function authenticate(mode, email, password) {
    const url = BASE_URL + `${mode}?key=${API_KEY}`;
    const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
    });
    const token = response.data.idToken;

    return token;
}

export function createUser(email, password) {
    return authenticate(AUTHENTICATE_MODE.createUser, email, password);
}

export function login(email, password) {
    return authenticate(AUTHENTICATE_MODE.login, email, password);
}
