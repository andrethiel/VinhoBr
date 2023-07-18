export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-2 py-5">
        <div>
          <img src={`./homepage144.png`} />
        </div>
        <div className="flex justify-center items-center">
          Conheça nossa degustação de vinhos
        </div>
      </div>
      <div className="grid grid-cols-2 py-5 gap-5">
        <div className="flex justify-center items-center">
          Conheça nossa adega
        </div>
        <div>
          <img src={`./homepage144.png`} />
        </div>
      </div>
    </div>
  );
}
