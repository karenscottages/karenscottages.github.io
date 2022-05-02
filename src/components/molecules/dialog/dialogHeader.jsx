import React from 'react';

export const DialogHeader = ({close, title, theme}) => <div className={`p-2 is-flex is-justify-content-space-between card ${theme.contentBackground} ${theme.textColour}`}>
    {title && <h2>{title}</h2>}
    <span onClick={close}><i className='far fa-times-circle mr-1'/></span>
</div>;

