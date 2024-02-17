const VidePage = ({ params }: { params: { slug: string } }) => {
  return <div className="md:ml-[300px]">Video {params.slug}</div>;
};

export default VidePage;
