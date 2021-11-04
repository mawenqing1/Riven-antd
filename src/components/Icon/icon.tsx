import React, { FC } from 'react';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconProps } from '../../types/icon/icon';

const Icon: FC<IconProps> = (props) => {
  const {
    className,
    theme,
    ...restProps
  } = props;

  const classes = classNames('riven-icon', className, {
    [`icon-${theme}`]: theme
  });

  return(
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon;
