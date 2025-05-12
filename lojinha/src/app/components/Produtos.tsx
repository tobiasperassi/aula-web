'use client'

export function Produtos(){

    const filtrarPizza = () => {
        
    }

    return(
        <div>
            <div className="flex flex-row justify-between mx-5 my-6">
                <p className="font-bold text-3xl text-black">Cuisines</p>
                <p className="cursor-pointer text-gray-600">See all</p>
            </div>
            <div className="flex justify-center">
                <ul className=" flex flex-row gap-5 w-90/100">
                    <li className="flex flex-col items-center bg-gray-100 py-2 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer shadow-lg/20 hover:scale-110 transition duration-300 ease-in-out" onClick={filtrarPizza}>
                        <img src="pizza2.webp" className="w-22" />
                        <p className="text-black">Pizza</p>
                    </li>
                    <li className="flex flex-col items-center bg-gray-100 py-2 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer shadow-lg/20 hover:scale-110 transition duration-300 ease-in-out px-2">
                        <img src="hamburguer.png" className="w-18" />
                        <p className="text-black">Burger</p>
                    </li>
                    <li className="flex flex-col items-center bg-gray-100 py-2 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer shadow-lg/20 hover:scale-110 transition duration-300 ease-in-out px-2">
                        <img src="pasta.png" className="w-18" />
                        <p className="text-black">Pasta</p>
                    </li>
                    <li className="flex flex-col items-center bg-gray-100 py-2 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer shadow-lg/20 hover:scale-110 transition duration-300 ease-in-out px-1">
                        <img src="SNACKS.png" className="w-18" />
                        <p className="text-black">Snacks</p>
                    </li>   
                </ul>
            </div>
            <div className="flex flex-col items-start ml-4 mt-5 mb-40">
                <div className="bg-radial-[at_50%_75%] from-[#b84401] via-[#622501] to-black to-90% w-60 rounded-t-3xl h-40 flex justify-center">
                    <img src="pizza.webp" alt="Pizza" className="w-40" />
                </div>
                <div className=" bg-gray-100 w-60 rounded-b-3xl p-4">
                    <p className="text-black">Cheesy, delicious, and <br />loaded with flavor</p>
                    <p className="text-[#DB4D30] text-xl font-bold">$8.00</p>
                </div>
            </div>
        </div>
    )
}