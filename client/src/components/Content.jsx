import React from "react";
import circuit from "../assets/Printed circuit board.gif";
import bg from '../assets/circle-scatter-haikei.png'
const Content = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h2 className="font-bold text-4xl">Hello!Come and improve your home experience with us..</h2>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim aut, veritatis optio deserunt laborum reprehenderit quod voluptatum odit dignissimos fugit laboriosam labore minus laudantium nemo. Commodi sunt minima est!</p>
      </div>
      </div>
      <div className="order-1 w-full md:w-1/2">
        <img src={circuit} className="w-92 h-92" alt="Printed circuit board" />
      </div>
      
    </div>
  );
};

export default Content;
