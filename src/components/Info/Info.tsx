import { FC, ReactNode } from 'react';
import styles from './Info.module.scss';

type InfoItem = {
	caption: string;
	condition: unknown;
	value: ReactNode;
};

interface InfoProps {
	items: InfoItem[];
}

export const Info: FC<InfoProps> = ({ items }) => {
	return (
		<ul className="list-reset">
			{items?.map((el) => (
				<li key={el.caption} className={styles.item}>
					<span className={styles.caption}>{el.caption}</span>
					{el.condition ? <span className={styles.value}>{el.value}</span> : '—'}
				</li>
			))}
		</ul>
	);
};
