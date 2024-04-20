import React from "react";
import logo from '../assets/logo.png';

const About = () => {
  return (
    <div className="mt-10 mb-10 p-5 flex justify-center items-center">
      <div className="w-1/2">
        <h2 className="text-center text-3xl font-bold mb-5">About Us</h2>
        <p className="p-5 text-center text-justify bg-blue-300 rounded-3xl shadow-lg">
          With an aim to provide supreme quality products, “Wizaard Systems” is expanding its business marvelously since 2000. We are a Sole Proprietorship entity, headquartered at Gandhipuram, Coimbatore, Tamil Nadu. The products that we provide to patrons as a manufacturer include Water Pump Controller, Water Level Controller, Battery Desulfator and Battery Life Enhancer. The reason for our expansion is that we deliver the clients what they need in precise time span.Since incorporation, our firm ensures to cater the varied desires of patrons and for this we have developed an avant-garde infrastructure base which is fully backed with all the important production machineries. Our professionals do timely maintenance of these machineries to eliminate the probability of obstruction in production procedure.
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={logo} className="w-1/2" alt="Logo" />
      </div>
    </div>
  );
}

export default About;
