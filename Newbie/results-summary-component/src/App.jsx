import data from "./data.json";
function App() {
  return (
    <div className="App w-full h-full md:h-screen bg-neutral-White font-Hanken text-[18px] flex justify-center items-center">
      <div className="flex md:flex-row flex-col items-center justify-between w-[750px] bg-neutral-White rounded-t-none rounded-b-[2rem] md:rounded-[2rem] md:shadow-2xl">
        {/* top */}
        <div className="w-full  xs:w-[375px] md:w-1/2 p-11 bg-gradient-to-b from-bg-Light-slate-blue to-bg-Light-royal-blue flex flex-col justify-between items-center gap-5 rounded-t-none rounded-b-[2rem] md:rounded-[2rem]">
          <h3 className="text-2xl text-neutral-Light-lavender">Your Result</h3>
          <div className="bg-gradient-to-t from-circle-Persian-blue to-circle-Violet-blue flex flex-col justify-center items-center gap-3 rounded-full w-40 h-40">
            <span className="text-6xl font-bold text-white">76</span>
            <span className="text-neutral-Light-lavender">of 100</span>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-3xl">Great</h3>
            <p className="px-6 text-neutral-Light-lavender">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        {/* bottom */}
        <div className="w-full xs:w-[375px] md:w-1/2 h-full p-10 text-left font-bold flex flex-col gap-5">
          <h3 className="text-2xl text-neutral-Dark-gray-blue font-bold">
            Summary
          </h3>
          <div className="flex flex-col gap-3">
            {data.map((d, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: `${d.color}15` }}
                className="w-full p-3 justify-between items-center flex rounded-xl"
              >
                <div className="flex gap-2 ">
                  <img src={d.icon} alt={d.category} />
                  <span style={{ color: `${d.color}` }}>{d.category}</span>
                </div>
                <span className="text-neutral-Dark-gray-blue">
                  {d.score}
                  <span className="opacity-70"> / 100</span>
                </span>
              </div>
            ))}
          </div>
          <button className=" py-4 rounded-full text-neutral-White bg-neutral-Dark-gray-blue hover:bg-gradient-to-b from-bg-Light-slate-blue to-bg-Light-royal-blue">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
