const CoursePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <section className="md:ml-[300px]">
        <div className="flex">
          <div>VIDEOS {params.id}</div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
