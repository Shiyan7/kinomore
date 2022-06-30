import { FC, Fragment } from "react"
import {Tab as ReactTab, TabList as ReactTabList, TabPanel as ReactTabPanel, Tabs as ReactTabs} from "react-tabs"

type TabItem = {
    txt: string;
    condition: any;
    content: any
}

interface TabsProps {
    tabs: TabItem[]
}

export const Tabs: FC<TabsProps> = ({tabs}) => {
    return (
        <ReactTabs>
            <ReactTabList>
                {tabs.map((el) => (
                    <Fragment key={el.txt}>
                    {el.condition ? <ReactTab>{el.txt}</ReactTab> : null}
                    </Fragment>
                ))}
            </ReactTabList>
            {tabs.map((el) => (
                <Fragment key={el.txt}>
                    {el.condition ? (
                    <ReactTabPanel key={el.txt}>{el.content}</ReactTabPanel>
                    ) : null}
                </Fragment>
            ))}
      </ReactTabs>
    );
}