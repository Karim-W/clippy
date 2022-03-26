import React from 'react'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <p className='text-5xl text-transparent font-extrabold w-fit bg-clip-text bg-gradient-to-r from-emerald-500 to-white drop-shadow-xl'>
                Clippy.
            </p>
            <p className='text-2xl mt-4 max-w-[50%] font-extralight'>
                A simple, minimalistic, Web Application to help you share items via your clipboard.
            </p>
        </div>
    )
}
