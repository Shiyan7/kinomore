import {FC, Fragment} from "react"
import {IMovie} from "@/types/IMovie"
import {Tab, TabList, TabPanel, Tabs} from "react-tabs"
import {FilmFacts} from "../FilmFacts/FilmFacts";
import {MainRoles} from "../MainRoles/MainRoles";
import styles from "./FilmDetails.module.scss";

interface FilmDetailsProps {
    data: IMovie | undefined;
}

export const FilmDetails: FC<FilmDetailsProps> = ({data}) => {

    const { description, facts, persons } = { ...data };

    const roles = persons?.filter(el => {
      if (el.enProfession === 'actor' && el.name?.length) {
        return el;
      }
    });

    const tabs = [
      {txt: 'Описание', content: <p className={styles.desc}>{description}</p>, condition: description?.length},
      {txt: 'Актёры', content: <MainRoles roles={roles} />, condition: roles?.length},
      {txt: 'Факты', content: <FilmFacts facts={facts} />, condition: facts?.length},
    ]

    return (
      <Tabs>
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
      </Tabs>
    );
}
