import { NextPage } from "next";
import { Lists } from "@/components/screens/Lists/Lists";
import { Series } from "@/components/screens/Series/Series";

const SeriesPage: NextPage = () => {
  return (
    <Lists>
      <Series />
    </Lists>
  );
};

export default SeriesPage;