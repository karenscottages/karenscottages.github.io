import React from "react";
import { Icon } from "/components/atoms/icon";

const SelectedIcon = ({onClick}) => 
    <Icon onClick={onClick} className='far fa-dot-circle' wrapperClassName='has-text-info' />;

const UnSelectedIcon = ({onClick}) => 
    <Icon onClick={onClick} className='far fa-circle' />;

export const Radio = ({checked, onClick = undefined}) => (checked ? 
    <SelectedIcon onClick={onClick} /> : 
    <UnSelectedIcon onClick={onClick} />);
