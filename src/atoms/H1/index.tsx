type H1Props = {
  pageTitle: string;
};

const H1 = ({ pageTitle }: H1Props) => {
  return (
    <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl text-black">
      {pageTitle}
    </h1>
  );
};

export default H1;
