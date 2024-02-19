import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500"] });
export const metadata = {
  title: "Academy | Tahrirlash",
};

const Edit = () => {
  return <div className={`${ubuntu.className} ml-64`}>Edit</div>;
};

export default Edit;
