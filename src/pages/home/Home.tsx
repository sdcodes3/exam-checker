import React from "react";
import "./styles.css";

// assets import
import page from "./../../assets/one.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[60%]">
              <img src={page} alt="paper page" />
            </div>
            <div className="flex lg:flex-col w-full lg:w-[10%]">
              <div className="w-full">Tool box</div>
              <div className="w-full">Marks</div>
            </div>
            <div className="w-full lg:w-[30%]">Question</div>
          </div>

          <div>Page Utility</div>
        </div>
      </div>
    </>
  );
};

export default Home;
