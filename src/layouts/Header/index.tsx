import Navigation from "../../molecules/Navigation";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-xl font-bold tracking-tight text-gray-900">NRV12</p>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
