import React from "react";
import p1 from '../assets/automatic-school-bell-250x250.webp';
import p2 from '../assets/gps-tracker-500x500.webp';
import p3 from '../assets/415MBkIJqhL.jpg';
import p4 from '../assets/bullet-camera-500x500.webp';
import p5 from '../assets/cctv-surveillance-system-500x500.webp';
import p6 from '../assets/finger-print-attendance-recorder-500x500.webp';
import p7 from '../assets/gps-tracking-system-250x250.jpg';
import p8 from '../assets/indoor-camera-500x500.webp';
import p9 from '../assets/school-bus-camera-with-gps-500x500.webp'
import p10 from '../assets/bm-tda-500x500.webp'
import p11 from '../assets/face-reader-500x500.webp'

const Product = () => {
  const products = [
    { image: p1, text: "Automatic School Bell" },
    { image: p2, text: "GPS Tracker" },
    { image: p3, text: "Battery Enchancer" },
    { image: p4, text: "Bullet Camera" },
    { image: p5, text: "CCTV Surveillance System" },
    { image: p6, text: "Finger Print Attendance Recorder" },
    { image: p7, text: "GPS Tracking System" },
    { image: p8, text: "Indoor Camera" },
    { image: p9, text: "School bus camera" },
    { image: p10, text: "Wall Mount Thermometer with Access control" },
    { image: p11, text :"Face Reader"}
  ];

  return (
    <div className="mt-10 p-5">
      <h2 className="text-center text-3xl font-bold mb-5">Products</h2>
      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <div key={index} className="w-1/4 p-2 hover:scale-110">
              <div className="rounded-lg p-2 flex flex-col justify-center items-center text-white text-center shadow-lg">
              <img src={product.image} className="w-full h-52 rounded-lg" alt={product.text} />
                <p className="text-black" >{product.text}</p>
                <a href="#" className="bg-black rounded-lg p-2 block mt-2 hover:text-gray bg-black-100">Buy Now</a>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
