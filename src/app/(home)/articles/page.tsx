import DevArticles from "@/components/fetchdata/dev-articles";

export const metadata = {
  title: "Academy | Maqolalar",
};

const Articles = () => {
  return (
    <div className="md:ml-64">
      <DevArticles />
    </div>
  );
};

export default Articles;
