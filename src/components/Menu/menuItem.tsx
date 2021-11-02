import React, { useContext, FC } from "react";
import classNames from "classnames";
import { MenuItemProps } from "../../types/menu/menu";
import { MenuContext } from './menu'

const MenuItem: FC<MenuItemProps> = (props) => {
    const {
        index,
        disabled,
        className,
        style,
        children
    } = props;

    const context = useContext(MenuContext);

    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })

    const handleClick = () => {
        if(context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    };

    return(
        <li
            className={classes}
            style={style}
            onClick={handleClick}
        >
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem';

export default MenuItem