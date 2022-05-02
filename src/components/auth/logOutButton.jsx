import React from 'react';
import { AuthenticationService } from '/agility/authentication';

export const LogOutButton = () => <button className="button" onClick={AuthenticationService.logout}>
    <span className="icon">
        <i className="fas fa-sign-out-alt" />
    </span>
    <span>Log out</span>
</button>;