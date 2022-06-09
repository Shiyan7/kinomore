import { NextPage } from "next";
import { Lists } from "@/components/screens/Lists/Lists";
import { Years } from "@/components/screens/Years/Years";

const YearsPage: NextPage = () => {
  return (
    <Lists>
      <Years />
    </Lists>
  );
};

export default YearsPage;