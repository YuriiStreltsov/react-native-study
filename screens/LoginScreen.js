import { useContext, useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../API/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
    const authCtx = useContext(AuthContext);

    const [isAuth, setIsAuth] = useState(false);

    async function loginHandler({ email, password }) {
        setIsAuth(true);
        try {
            const token = await login(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log in. Please check your credentials or try again later!'
            );
            setIsAuth(false);
        }
    }

    if (isAuth) {
        return <LoadingOverlay message='Logging you in...' />;
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
