import rasm from "../../images/plan.png";

const Home = () => {
  return (
    <>
      <div className="home container mx-auto flex flex-col justify-end items-end ">
        <div className="home-img">
          <img
            src={rasm}
            alt=""
            className="w-[250px] relative right-[100px] top-[150px]"
          />
        </div>
        <div className="home-text flex flex-col ">
          <div className="item w-[700px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[20px] ">
              Architectural Engineering
            </h1>
            <h3 className="text-[#686767] font-[900] text-[20px]">01</h3>
          </div>
          <div className="item w-[700px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[20px] ">
              Interior Design
            </h1>
            <h3 className="text-[#686767] font-[900] text-[20px]">02</h3>
          </div>
          <div className="item w-[700px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[20px] ">
              Urban environment design
            </h1>

            <h3 className="text-[#686767] font-[900] text-[20px]">03</h3>
          </div>
          <div className="item w-[700px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[20px] ">
              Landscape design
            </h1>
            <h3 className="text-[#686767] font-[900] text-[20px]">04</h3>
          </div>
          <div className="item w-[700px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[20px] ">
              Project documentation
            </h1>
            <h3 className="text-[#686767] font-[900] text-[20px]">05</h3>
          </div>
          <div className="item w-[700px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[20px] ">
              Authors supervision
            </h1>
            <h3 className="text-[#686767] font-[900] text-[20px]">06</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
