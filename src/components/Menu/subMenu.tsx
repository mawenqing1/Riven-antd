import React, { useContext, useState, FunctionComponentElement, FC, Children, MouseEvent } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { SubMenuProps, MenuItemProps } from "../../types/menu/menu";
import Icon from "../Icon/icon";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Transition from '../Transition/transition'


library.add(fas)
const SubMenu: FC<SubMenuProps> = ({ index, title, className, children }) => {
    const context = useContext(MenuContext);
    const openSubMenu = context.defaultOpenSubMenu as Array<string>;
    const isOpened = (index && context.mode === 'vertical') ? openSubMenu.includes(index) : false;
    const [menuOpen, setMenuOpen] = useState<boolean>(isOpened);
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        setMenuOpen(!menuOpen)
    };
    let timer: any;

    const handleMouse = (e: MouseEvent, toggle: boolean) => {
        window.clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setMenuOpen(toggle)
        }, 300)
    };
    const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {};
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: MouseEvent) => { handleMouse(e, false) }
    } : {}

    const renderChildren = () => {
        const menuOpenClasses = classNames('riven-submenu', {
            'menu-opened': menuOpen
        });
        const childrenComponent = Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error('Warning: SubMenu has a  child which is not a MenuItem component.');
            }
        });
        return (
            <Transition
                in={menuOpen}
                timeout={300}
                animation='zoom-in-top'
            >
                <ul
                    className={menuOpenClasses}
                >
                    {childrenComponent}
                </ul>
            </Transition>
        )
    };

    return (
        <li
            key={index}
            className={classes}
            {...hoverEvents}
        >
            <div className='submenu-title'
                {...clickEvents}
            >
                {title}
                <Icon icon='angle-down' className='arrow-icon' />
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu