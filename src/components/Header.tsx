import hpLogo from "/hp.svg";

export const Header = () => {
  return (
    <header className="bg-green-2 flex justify-center items-center h-20">
      <img src={hpLogo} alt="Harry Potter Logo" className="w-16 h-16" />
    </header>
  );
};
