import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '/ami/style/bulma/themeContext';

// This is a styled list as the li is on a dark background
// the bulma variables '$menu-item-hover-color' and '$menu-item-color' control the way the list item colours display, 
// but they are 'under the hood' of the is-active class.
// globally updating these variables affects other list items elsewhere in the code base.
// Note that bulma variables do not work within a styled component

export const StyledLi = styled.li`
    a, .icon {
        color: ${({theme}) => theme.styledTextColor};
    }
    &:hover {
        background-color: ${({theme}) => theme.styledHoverBackground};
        color: ${({theme}) => theme.styledHoverText};
        .icon {
            color: ${({theme}) => theme.styledHoverText};
        }
        cursor: pointer;
    }
`;

const FakeLink = ({onClick, children}) => <a onClick={onClick}>{children}</a>;

export const MenuItem = ({
    onClick = () => {}, 
    children, 
    sizeClass = "is-small", 
    icon = "fa fa-link", 
    to = ''
}) => {
    const {theme} = React.useContext(ThemeContext);
    const Link = to ? NavLink : FakeLink;

    return <StyledLi theme={theme}>
        <Link to={to} activeClassName={"is-active"} onClick={onClick}>
            <span className={`icon ${sizeClass}`}>
                <i className={icon} />
            </span> {children}
        </Link>
    </StyledLi>;
};
