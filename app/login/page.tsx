import React from 'react'
import Link from 'next/link'

export default function login() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-[75%] md:w-[25%] md:p-4 bg-gray-700">
            <h1 className="text-xl font-bold align-middle items-center">SIGN IN</h1>
                <form className="flex flex-col">
                    <input type="text" placeholder="UserName" className="flex-1 min-w-[25%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                    <input type="password" placeholder="Password" className="flex-1 min-w-[25%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                    <button className="p-2 mb-3 cursor-pointer mt-2 bg-blue-700">LOGIN</button>
                    <Link href="#"><p className="mb-3 cursor-pointer underline text-sm">¿No recuerdas tu contraseña?</p></Link>
                    <Link href="/register"><p className="mt-1 cursor-pointer underline text-sm">Crea una nueva cuenta</p></Link>
                    <Link href="/#"><button className="p-3 cursor-pointer mt-2 bg-blue-700">Atrás</button></Link>
                </form>
            </div>
</div>
  )
}