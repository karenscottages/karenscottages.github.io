import React from 'react';
import logo from '/assets/magnitudeLogo.svg';
import { agilityImageBackgroundStyle } from '/common/commonStyle/inlineStyles';

export const SsoLoginBody = ({ sso }) => {
    const { identityProviders, ssoUrl, setStandardLogin } = sso;

    const onClick = (identityProvider) => {
        const redirectUrl = `${ssoUrl}/saml/login?disco=true&idp=${identityProvider.url}&redirectURL=${window.location.href}`;
        window.location.href = redirectUrl;
    };

    const useAgilityLogin = () => setStandardLogin(true);

    return <section className="hero is-primary is-fullheight" style={agilityImageBackgroundStyle}>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-4-widescreen has-background-grey-darker" style={{ 'marginBottom': '110px' }}>
                        <div className="pb-3">
                            <img src={logo} />
                        </div>
                        <div className="buttons">
                            {identityProviders.map((identityProvider) =>
                                <button 
                                    key={identityProvider.name} 
                                    className="button is-primary is-fullwidth"
                                    onClick={() => onClick(identityProvider)}
                                >
                                    {identityProvider.name}
                                </button>)}
                            <button 
                                className="button is-primary is-fullwidth"
                                onClick={useAgilityLogin}
                            >
                                Agility Login        
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};
