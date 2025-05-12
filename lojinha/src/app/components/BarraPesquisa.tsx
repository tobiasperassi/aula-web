'use client'

export function BarraPesquisa(){

  

  return(
    <div>
      <div className="flex flex-row">
        <div className="w-full flex justify-center mt-5">
          <div className="w-90/100 h-45 bg-linear-to-r from-[#010101] to-[#5c2200] rounded-2xl flex flex-col p-5">
            <p className="font-bold text-xl">First order 40% <br /> off + free delivery.</p>
            <p className="text-gray-400 mt-3">The perfect your pizza <br />journey</p>
            <button className="bg-[#ff5735] w-26 py-0.5 mt-1 rounded-2xl">Order Now</button>
          </div>
        </div>
        <img src="pizza.webp" className="absolute w-48 right-0.5" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row w-90/100 rounded-3xl bg-gray-100 mt-5 py-3 px-4">
          <img src="pesquisa.png" alt="Pesquisar por:" className="w-5 h-5 cursor-pointer" />
          <input type="text" placeholder="Search Food, Pizza, Etc." className="flex-1 ml-3 placeholder-gray-300 outline-none border-none focus:ring-0 text-black" />
          <div className="flex flex-row-reverse gap-2">
            <img src="filtro.png" alt="Filtrar por:" className="w-5 h-5 cursor-pointer"/>
            <p className="text-gray-300">|</p>
          </div>
        </div>
      </div>
    </div>
  ) 
}