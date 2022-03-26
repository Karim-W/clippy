import React from 'react'

export default function NavBar() {
    function MenuItem({ name, slug }: any) {
        return (<div className='p-2 hover:brightness-75 rounded-lg hover:bg-zinc-900 hover:opacity-80' >
            <a href={slug}>
                {name}
            </a>
        </div>
        )
    }
    return (
        <div className='h-[3rem] bg-zinc-800 text-white w-full drop-shadow-xl shadow-lg flex flex-row justify-between items-center px-4'>
            <div className='text-2xl font-semibold ml-[48%]'>
                Clippy
            </div>
            <div className='flex flex-row gap-4'>
                <MenuItem name="Home" slug="/" />
                <MenuItem name="About" slug="/about" />
                <MenuItem name="Create" slug="/create" />
                <MenuItem name="Contact" slug="/contact" />
            </div>
            {/* <div></div> */}
        </div>
    )
}
