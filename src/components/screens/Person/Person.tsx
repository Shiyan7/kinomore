/* eslint-disable @next/next/no-img-element */
import { Title } from '@/UI/Title/Title';
import { BackButton } from '@/UI/BackButton/BackButton';
import { useRouter } from 'next/router';
import { useGetPersonByIdQuery } from '@/services/KinomoreService';
import { PersonInfo, PersonTabs } from './components';
import styles from './Person.module.scss';
import classNames from 'classnames';

export const Person = () => {
	const {
		query: { id },
	} = useRouter();
	const { data } = useGetPersonByIdQuery(id);
	const { name, enName, photo } = { ...data };

	return (
		<section className={styles.section}>
			<div className={classNames('container wrapper', styles.container)}>
				<div className={styles.top}>
					<BackButton />
				</div>
				<div className={styles.content}>
					<div className={styles.left}>
						<img className={styles.image} src={photo} alt={name} />
					</div>
					<div className={styles.right}>
						<Title className={styles.title} variant="h1">
							{name}
						</Title>
						<span className={styles.originalTitle}>{enName}</span>
						<Title variant="h2" className={styles.subtitle}>
							О персоне
						</Title>
						<PersonInfo data={data} />
					</div>
				</div>
				<PersonTabs data={data} />
			</div>
		</section>
	);
};
