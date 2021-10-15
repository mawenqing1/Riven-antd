enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string
}



export {
    ButtonSize,
    ButtonType
}