import type { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="mx-auto h-16 max-w-7xl min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      {children}
    </main>
  );
};

export default Main;