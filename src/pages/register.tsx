import {Layout} from "@/components/Layout/Layout";
import {SignUp} from "@/components/screens/SignUp/SignUp";
import {NextPage} from "next";

const RegisterPage: NextPage = () => {
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
};

export default RegisterPage;