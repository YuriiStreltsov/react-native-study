import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../API/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
    const authCtx = useContext(AuthContext);
    const [isAuth, setIsAuth] = useState(false);

    async function signUpHandler({ email, password }) {
        setIsAuth(true);
        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log create user. Please check your input or try again later!'
            );
            setIsAuth(false);
        }
    }

    if (isAuth) {
        return <LoadingOverlay message='Creating user...' />;
    }

    return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
