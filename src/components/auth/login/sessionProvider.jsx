import React from 'react';
import { AuthenticationService, useSessionListener } from '/agility/authentication';
import { LoginPage } from './loginPage.jsx';
import { useQueryParams } from './useQueryParams.jsx';

export const SessionContext = React.createContext({});

export const SessionProvider = ({children}) => {
    const [session, setSession] = React.useState(AuthenticationService.session);
    const [urlLoginAttempted, setUrlLoginAttempted] = React.useState(false);
    const [password, setPassword] = React.useState();

    useSessionListener(setSession);

    React.useEffect(() => {
        if (session && session.isValid) {
            setPassword();
        }
    }, [session]);
   
    React.useEffect(() => {
        // We always attempt a urlLogin. It will do nothing if user is not set in the url
        const loginParams = ["forceLogin", "user", "pass", "sess", "authResponse"];
        const queryParams = useQueryParams(loginParams);
        AuthenticationService.urlLogin(queryParams).then(() => setUrlLoginAttempted(true));
        setPassword(queryParams.pass);
        
        // Remove the login params from the url
        let params = new URLSearchParams(window.location.search);
        loginParams.forEach((param) => params.delete(param));
        params = Array.from(params).length ? '?' + params : '';
        window.history.replaceState(null, '', window.location.pathname + params + window.location.hash);
    }, []);

    if (!urlLoginAttempted) {
        return null;
    }

    return <SessionContext.Provider value={session}>
        {(session && session.isValid) ? children : <LoginPage password={password} />}
    </SessionContext.Provider>;
};