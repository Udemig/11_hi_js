const Doc = async ({ params }) => {
  const { slug } = await params;

  return (
    <div className="h-screen grid place-items-center text-2xl">
      <div className="flex flex-col gap-5">
        {slug.map((param) => (
          <h1>{param}</h1>
        ))}
      </div>
    </div>
  );
};

export default Doc;
