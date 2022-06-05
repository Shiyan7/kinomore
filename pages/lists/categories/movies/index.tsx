import { NextPage } from "next";
import { Films } from "../../../../components/screens/Films/Films";
import { Lists } from "../../../../components/screens/Lists/Lists";

const FilmsPage: NextPage = () => {
  return (
    <Lists>
      <Films />
    </Lists>
  );
};

export default FilmsPage;