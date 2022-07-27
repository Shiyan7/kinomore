import {PropsWithChildren} from 'react';
import classNames from 'classnames';
import styles from './Grid.module.scss';

export const Grid = ({children}: PropsWithChildren<{}>) => {
    return (
        <ul className={classNames("list-reset", styles.grid)}>
            {children}
        </ul>
    )
}