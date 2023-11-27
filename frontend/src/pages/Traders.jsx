import CardComponent from "../components/Card";

function Traders() {
  return (
    <>
      <h1
        className="text-3xl font-bold text-center text-slate-300 p-4"
        style={{
          background: "linear-gradient(to right, #706c0c, #181702 )",
        }}>
        Traders
      </h1>
      <CardComponent />
    </>
  );
}

export default Traders;
