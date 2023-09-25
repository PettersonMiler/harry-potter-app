import hpLoader from "../assets/hpLoader.svg";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-36">
      <div className="animate-pulse">
        <img src={hpLoader} alt="Ícone de Loading" />
      </div>
    </div>
  );
};
