import React from "react";

type MenuMode = 'horizontal' | 'vertical'

type selectCallBack = (selectedIndex: string) => void;

interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: selectCallBack;
    defaultOpenSubMenu?: string[];
}

interface IMenuContext {
    index: string;
    onSelect?: selectCallBack;
    mode?: MenuMode;
    defaultOpenSubMenu?: string[];
}

interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

export type{
    MenuProps,
    MenuItemProps,
    IMenuContext,
    SubMenuProps
}