import React from 'react';
import { LoginPageBody } from './loginPageBody.jsx';
import { SsoLoginBody } from './ssoLoginBody.jsx';
import { useQueryParams } from './useQueryParams.jsx';
import { AuthenticationService } from '/agility/authentication';
import { SessionContext } from './sessionProvider.jsx';
import { SsoContext } from '/ami/components/validator/ssoProvider.jsx';

export const LoginPage = ({ password: urlPassword = "" }) => {
    const session = React.useContext(SessionContext);
    const sso = React.useContext(SsoContext);

    const [user, setUser] = React.useState(session ? session.user : "");
    const [password, setPassword] = React.useState(urlPassword);
    const { forcedLogin = false } = useQueryParams(["forcedLogin"]);

    const onChangeText = ({ currentTarget }) => (currentTarget.value);
    const onChangeUser = ({ currentTarget }) => setUser(onChangeText({ currentTarget }));
    const onChangePassword = ({ currentTarget }) => setPassword(onChangeText({ currentTarget }));

    const onCancelRebind = (event) => {
        event.preventDefault();
        AuthenticationService.clearSession();
        clearValues();
    };

    const clearValues = () => {
        setUser("");
        setPassword("");
    };

    const onLogin = (event) => {
        /* 
            Without the event.preventDefault() line the LoginRequest fails 
            with "error TypeError: Failed to fetch" in the console, and the application restarts. 
            Rather strangely this only occurs if password is not an empty string "".
            if password IS an empty string, no error occurs and we get a valid response stating 
            invalid-credentials were sent.
        */
        event.preventDefault();

        const loginRequest = forcedLogin ?
            AuthenticationService.forcedLogin :
            (session && session.requiresRebind) ? AuthenticationService.rebind : AuthenticationService.login;
        loginRequest(user, password);
    };

    const props = {user, 
        onChangeUser, 
        password, 
        onChangePassword, 
        alreadyLoggedIn: (session && session.requiresRebind), 
        loginFailedMessage: (session && session.message), 
        showCancelRebind: (session && session.requiresRebind), 
        onLogin, 
        onCancelRebind
    };

    if (sso) {
        return <SsoLoginBody sso={sso} />;
    } else {
        return <LoginPageBody {...props}/>;
    }
};