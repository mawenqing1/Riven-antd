import React from "react";

type MenuMode = 'horizontal' | 'vertical'

type selectCallBack = (selectedIndex: number) => void;

interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: selectCallBack
}

interface IMenuContext {
    index: number;
    onSelect?: selectCallBack;
}

interface MenuItemProps {
    index: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export type{
    MenuProps,
    MenuItemProps,
    IMenuContext
}