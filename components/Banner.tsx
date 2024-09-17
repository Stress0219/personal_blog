import React from "react";
import Image from "next/image";
import banner from "../public/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="flex md:items-center overflow-x-hidden w-full">
        <div className="relative">
          <div className="md:absolute md:inset-0 md:bg-black opacity-60"></div>

          <Image
            width={1500}
            height={900}
            src={banner}
            alt="lineas de codigo binario cayendo sobre un teclado verde"
          />

          <div className="md:absolute md:inset-0 flex flex-col text-neutral-200">
            <div className="w-full lg:mr-4 lg:p-7 p-3">
              <h1 className="text-xl md:text-4xl font-semibold md:mb-4 mb-2 text-center text-wrap">
                <p className="text-5xl text-blue-600">¡Bienvenido a mi cueva de programación!</p> <br/> Aquí encontrarás un
                espacio dedicado a compartir conocimientos, ideas y recursos
                sobre el fascinante mundo del desarrollo de software. Desde
                tutoriales y proyectos hasta reflexiones y novedades, espero que
                encuentres inspiración y soluciones para tus desafíos de
                programación.<br/><br/> ¡Gracias por visitar y espero que disfrutes
                explorando!
              </h1>
            </div>
            <div className=" invisible md:visible md:flex md:justify-center md:items-center">
              <button className="p-4 font-bold text-2xl bg-blue-700 rounded-xl hover:bg-blue-600 animate-bounce">
                <a href="#destacados">SSSS</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
