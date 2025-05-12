'use client'
import { useState } from "react"
import { Navbar } from "./Navbar"

export function CadastroProd(){

    const [CadastroAberto, setCadastroAberto] = useState<boolean>(false)

    const abrirCadastro = () => {
        setCadastroAberto(true)
    }

    const fecharCadastro = () => {
        setCadastroAberto(false)
    }

    return(
        <div>
            {/*Cadastro de Produto*/}
            <div className={`bg-[url(/fundinho.png)] bg-cover ${CadastroAberto ? 'h-100' : 'pb-0'}`}>
                <div className={`bg-black/20 rounded-xl bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,3.0)_10%,_transparent_80%)] ${CadastroAberto ? 'h-70' : 'pb-0'}`}>
                    <div className="ml-4">
                        <Navbar />
                    </div>
                    <div className="flex justify-around"> 
                        <div className="ml-5"> 
                            <p className="text-white text-3xl font-bold w-30 mt-5">Cadastre já seus produtos</p>
                            <button onClick={abrirCadastro} className="cursor-pointer mb-10 mt-2 font-bold bg-[#641f08] py-0.5 px-7 rounded-md hover:scale-103 hover:bg-[#641f08cf] transition duration-300 ease-in-out">Cadastrar</button>
                        </div>
                        <img src="pizza_fundo.png" className="w-45 h-45  z-3" />
                    </div>
                </div>
            </div>

            {/*Barra de Pesquisa*/}
            <div className="flex justify-center pt-8">
                <p className="text-black font-bold text-3xl">Editar Produtos</p>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row w-90/100 rounded-3xl bg-gray-100 mt-5 py-3 px-4">
                    <img src="pesquisa.png" alt="Pesquisar por:" className="w-5 h-5 cursor-pointer" />
                    <input type="text" placeholder="Search Food, Pizza, Etc." className="flex-1 ml-3 placeholder-gray-300 outline-none border-none focus:ring-0 text-black" />
                    <div className="flex flex-row-reverse gap-2">
                        <img src="filtro.png" alt="Filtrar por:" className="w-5 h-5 cursor-pointer hover:scale-120 transition duration-300 ease-in-out"/>
                        <p className="text-gray-300">|</p>
                    </div>
                </div>
            </div>

            {/*Carrossel de lanches*/}
            <div className="flex flex-row justify-between pt-15 px-5 items-center">
                <p className="text-black text-2xl font-bold">Hambúrgueres</p>
                <p className="text-gray-400 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">View all</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col items-start ml-2 mt-5 mb-40 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                    <div className="bg-radial-[at_50%_75%] from-[#983621] to-black to-90% w-43 rounded-t-3xl h-35 flex justify-center items-center">
                        <img src="hamburguer.png" alt="Pizza" className="w-30 h-28" />
                    </div>
                    <div className=" bg-white w-43 rounded-b-2xl pl-3 shadow-xl">
                        <p className="text-black font-bold">Duplo Bacon</p>
                        <p className="text-[#DB4D30] font-bold">$9.90</p>
                    </div>
                </div>

                <div className="flex flex-col items-start ml-2 mt-5 mb-40 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                    <div className="bg-radial-[at_50%_75%] from-[#983621] to-black to-90% w-43 rounded-t-3xl h-35 flex justify-center items-center">
                        <img src="hamburguer.png" alt="Pizza" className="w-30 h-28" />
                    </div>
                    <div className=" bg-white w-43 rounded-b-2xl pl-2 shadow-xl">
                        <p className="text-black font-bold">Duplo Bacon</p>
                        <p className="text-[#DB4D30] font-bold">$9.90</p>
                    </div>
                </div>
            </div>

            {/*Menu para cadastrar produtos*/}
            {CadastroAberto && (
                    <div className='fixed inset-0 bg-transparent z-40' onClick={fecharCadastro} />
            )}
            <div className={`menu p-5 border-2 border-black fixed bottom-0 left-0 h-160 w-screen bg-gray-100 shadow-2xl rounded-t-2xl z-50 transition-transform duration-300 ${CadastroAberto ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-center">
                    <h1 className="text-black text-2xl font-bold">Cadastro de Produtos</h1>
                </div>
                <div>
                    <h1 className="text-2xl text-black pt-10">Nome</h1>
                    <input type="text" className="text-gray-300 w-full" placeholder="aaaaaaaaaaaaaaaaaa"/>
                </div>
            </div>
        </div>
    )
} 