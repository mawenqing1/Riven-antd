import React from "react"

type ButtonSize = 'lg' | 'sm'

type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export type {
    ButtonSize,
    ButtonType,
    ButtonProps
}