import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type Animation = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';

type TransitionProps = CSSTransitionProps & {
    animation?: Animation
}

export type {TransitionProps}