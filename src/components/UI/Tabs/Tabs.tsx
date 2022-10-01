import { FC, Fragment, ReactNode } from 'react';
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';
import classNames from 'classnames';
import styles from './Tabs.module.scss';

type TabItem = {
	txt: string;
	condition?: unknown;
	content: ReactNode;
};

interface TabsProps {
	tabs: TabItem[];
	className?: string;
}

export const Tabs: FC<TabsProps> = ({ className, tabs }) => {
	return (
		<ReactTabs selectedTabClassName={styles.selected} className={classNames(styles.tabs, className)}>
			<div className={styles.container}>
				<TabList className={styles.list}>
					{tabs.map((el) => {
						const { txt, condition = true } = el;

						return (
							<Fragment key={txt}>
								{condition ? <Tab className={styles.tab}>{txt}</Tab> : null}
							</Fragment>
						);
					})}
				</TabList>
			</div>
			{tabs.map((el) => {
				const { txt, content, condition = true } = el;

				return (
					<Fragment key={txt}>{condition ? <TabPanel>{content}</TabPanel> : null}</Fragment>
				);
			})}
		</ReactTabs>
	);
};
