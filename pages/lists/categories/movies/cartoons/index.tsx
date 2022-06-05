import { NextPage } from "next";
import { Cartoons } from "../../../../../components/screens/Cartoons/Cartoons";
import { Lists } from "../../../../../components/screens/Lists/Lists";

const CartoonsPage: NextPage = () => {
  return (
    <Lists>
      <Cartoons />
    </Lists>
  );
};

export default CartoonsPage;