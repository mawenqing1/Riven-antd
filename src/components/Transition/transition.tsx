import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionProps } from '../../types/animation/animation';


const Transition: FC<TransitionProps> = (props) => {
    const {
        children,
        classNames,
        animation,
        ...restProps
    } = props;

    return(
        <CSSTransition
            classNames={ classNames ? classNames : animation}
            {...restProps}
        >
            {children}
        </CSSTransition>
    )
}

Transition.defaultProps = {
    appear: true,
    unmountOnExit: true
}

export default Transition;
