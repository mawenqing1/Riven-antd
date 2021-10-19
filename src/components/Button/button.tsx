import React, {FC} from 'react';
import { ButtonProps } from '../../types/button/button';
import classNames from 'classnames';

const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href,
    className,
    ...restProps
  } = props

  //btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })

  if(btnType === 'link' && href) {
    return(
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return(
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled:false,
  btnType: 'default'
}

export default Button