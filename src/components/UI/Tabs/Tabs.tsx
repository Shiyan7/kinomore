import {FC, Fragment, memo, ReactNode} from "react"
import {Tab, TabList, TabPanel, Tabs as ReactTabs} from "react-tabs"

type TabItem = {
    txt: string;
    condition?: unknown;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[]
}

export const Tabs = memo<TabsProps>(({tabs}) => {
    return (
        <ReactTabs>
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
})

Tabs.displayName = 'Tabs'