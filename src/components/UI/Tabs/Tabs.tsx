import classNames from "classnames";
import {FC, Fragment, ReactNode} from "react"
import {Tab, TabList, TabPanel, Tabs as ReactTabs} from "react-tabs"

type TabItem = {
    txt: string;
    condition?: unknown;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    sticky?: boolean;
}

export const Tabs: FC<TabsProps> = ({tabs, sticky}) => {
    return (
        <ReactTabs className={classNames('react-tabs', sticky ? 'react-tabs--sticky' : null)}>
            <TabList>
                {tabs.map((el) => (
                    <Fragment key={el.txt}>
                        {el.condition ? <Tab>{el.txt}</Tab> : null}
                    </Fragment>
                ))}
            </TabList>
            {tabs.map((el) => (
                <Fragment key={el.txt}>
                    {el.condition ? (
                        <TabPanel key={el.txt}>{el.content}</TabPanel>
                    ) : null}
                </Fragment>
            ))}
      </ReactTabs>
    );
}