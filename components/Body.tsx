import React from "react";
import Cards from "@/components/Cards";

const Body = () => {
  return (
    <div className="bg-zinc-900 w-full h-full p-7">
      <div className="flex flex-col">
        <article className="text-xl align-middle text-center justify-center mt-5 mb-6 text-wrap leading-8">
          <p id="destacados" className="text-5xl text-blue-700 font-semibold mb-4">Destacados en la cueva</p>
          Sumérgete en los posts más valorados de mi cueva. Aquí
          encontrarás una colección curada de artículos y tutoriales que han
          capturado la atención y el interés de la comunidad. Desde guías
          detalladas y trucos útiles hasta análisis profundos de tecnologías
          emergentes, cada entrada está diseñada para ofrecerte valor y
          conocimiento. No te pierdas estos recursos imprescindibles que han
          dejado huella y siguen inspirando a programadores de todos los
          niveles. ¡Descubre qué hace que estos posts sean tan especiales y
          encuentra la inspiración que necesitas!
        </article>
        <div className="grid grid-cols-3 gap-y-6">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
};

export default Body;
