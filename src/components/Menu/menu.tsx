import React, { createContext, FC, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuProps, IMenuContext, MenuItemProps } from "../../types/menu/menu";

export const MenuContext = createContext<IMenuContext>({index: '0'});

const Menu: FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        children,
        style,
        defaultIndex,
        defaultOpenSubMenu,
        onSelect
    } = props;

    const [currentActive, setCurrentActive] = useState<string | undefined>(defaultIndex)

    const classes = classNames('riven-menu', className, {
        'menu-vertical' : mode === 'vertical',
        'menu-horizontal' : mode !== 'vertical'
    });

    const handleClick = (index:string) => {
        setCurrentActive(index);
        if(onSelect) {
            onSelect(index)
        }
    };

    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect:handleClick,
        mode,
        defaultOpenSubMenu
    }

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if(displayName === 'MenuItem' || 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.error('Warning: Menu has a  child which is not a MenuItem component.');
            }
        })
    }

    return (
        <ul
            className={classes}
            style={style}
            data-testid='test-menu'
        >
            <MenuContext.Provider value = {passedContext}>
            {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenu: []
}

export default Menu