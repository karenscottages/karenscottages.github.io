import React from 'react';
import logo from '/assets/magnitudeLogo.svg';
import {agilityImageBackgroundStyle} from '/common/commonStyle/inlineStyles';

export const AlreadyLoggedinInNotification = ({ user }) =>
    <div className="notification">
        There is an existing session open for {user}. Click Login if you wish to close that session and continue to log in.
    </div>;

export const AuthenticationFailedNotification = ({ message }) =>
    <div className="notification">
        {message}
    </div>;

export const LoginPageBody = ({ user, onChangeUser, password, onChangePassword, alreadyLoggedIn, loginFailedMessage, showCancelRebind, onLogin, onCancelRebind }) => <section className="hero is-primary is-fullheight" style={agilityImageBackgroundStyle}>
    <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">

                <div className="column is-5-tablet is-4-desktop is-4-widescreen has-background-dark" style={{'marginBottom': '110px'}}>
                    <form action="" className="box has-background-dark" autoComplete="off">

                        <div className="pb-3">
                            <img src={logo} />
                        </div>
                        <div className="field pb-2">
                            <div className="control has-icons-left">
                                <input type="text" autoComplete="off" placeholder="username" value={user || ""} id="login-username" className="input" required onChange={onChangeUser} />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-user" />
                                </span>
                            </div>
                        </div>
                        <div className="field pb-2">
                            <div className="control has-icons-left">
                                <input
                                    autoComplete="off"
                                    type="password"
                                    value={password || ""}
                                    className="input"
                                    required
                                    id="login-password"
                                    onChange={onChangePassword} />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-key" />
                                </span>
                            </div>
                        </div>
                        {alreadyLoggedIn && <AlreadyLoggedinInNotification user={user} />}
                        {loginFailedMessage && <AuthenticationFailedNotification message={loginFailedMessage} />}
                        <div className="buttons">
                            {showCancelRebind && <button className="button is-primary is-fullwidth" onClick={onCancelRebind}> Cancel </button>}
                            {<button id="login-btn" className="button is-primary is-fullwidth" onClick={onLogin} disabled={!user || !password}> Login </button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>;
