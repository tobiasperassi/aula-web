'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';

export function Navbar(){
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const localização = 'Aqui vem a localização';

    const abrirMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const fecharMenu = () => {
        setIsMenuOpen(false)
    }

    return(
        <div>
            <div className=" w-full text-center pt-5">
                <ul className="flex flex-row items-center justify-between">

                    {/*Imagem Menu*/}
                    <li>
                        {pathname === '/CadastroDeProdutos' && (
                            <>
                                <img src="menu-branco.png" alt="Menu" onClick={abrirMenu} className="w-6 h-5 cursor-pointer hover:scale-110 transition duration-300"/>
                            </>
                        )}

                    </li>

                    {/*Imagem Menu e Localização*/}
                    <li className="flex">
                        {pathname === '/' && (
                            <>
                                <img src="menu-preto.png" alt="Menu" onClick={abrirMenu} className="w-8 mr-4 cursor-pointer"/>
                                <Image src="/pin.png" className="cursor-pointer w-7" alt="Localização" width={28} height={28} />
                                <p className="text-gray-500 p-1">{localização}</p>
                            </>
                        )}
                        
                    </li>

                    {/*Imagem Notificação*/}
                    <li>
                        {pathname === '/' && (
                            <Image src="/sino.png" className="cursor-pointer w-7" alt="Notificações" width={28} height={28} />
                        )}
                    </li>

                    {/*Imagem Carrinho*/}
                    <li>
                        {pathname === '/' && (
                            <>
                                <img src="bolsa-de-compras.png" alt="Carrinho" className="w-6 cursor-pointer flex flex-end mr-4"/>
                            </>
                        )}
                    </li>
                </ul>
            </div>

            {isMenuOpen && (
                <div className='fixed inset-0 bg-transparent z-40' onClick={fecharMenu} />
            )}
            

            <div className={`menu fixed top-0 left-0 h-screen w-64 bg-gray-100 shadow-lg z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-between m-4'>
                    <h2 className='text-xl semi-bold text-gray-700'>Menu</h2>
                    <img src="x.png" alt="Fechar" className='cursor-pointer w-6 h-6' onClick={fecharMenu} />
                </div>
                <ul className="p-4 bg-gray-100 h-full">
                    <li className="py-2">
                        <Link href="/" className='text-black'>Home</Link>
                    </li>
                    <li className="py-2">
                        <Link href="/CadastroDeProdutos" className='text-black'>Cadastro de Produtos</Link>
                    </li>
                    <li className="py-2">
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}