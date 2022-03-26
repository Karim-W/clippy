import React from 'react'
import { CreateAClipBoardItem } from '../api/apis'
import { ClipBoard } from '../models/clipboard'

export default function Create() {
    const [body, setBody] = React.useState('')
    const [published, setPublished] = React.useState(false)
    const [id, setId] = React.useState('')
    async function handleSubmit() {
        let objReturned = await CreateAClipBoardItem(body)
        setId(objReturned.id)
        setPublished(true)
    }
    if (published) {
        return (
            <div className='flex h-full flex-col gap-8'>
                <div className='flex flex-row '>
                    <p className='text-4xl text-transparent font-extrabold w-fit bg-clip-text bg-gradient-to-r from-emerald-500 to-white drop-shadow-xl shadow-2xl'>
                        Congratulations!!
                    </p>
                </div>
                <p className='text-2xl mt-4 font-extralight'>
                    your item has been Published successfully.
                </p>

                <div className='flex flex-col w-full justify-center items-center'>
                    <div className='text-lg mt-4 font-extralight'>you can access it at the following link:</div><code className='p-1 bg-black rounded-md'>http://localhost:3000/clips/{id}</code>
                </div>

            </div >
        )
    } else {
        return (
            <div className='flex h-full flex-col gap-8'>
                <div className='flex flex-row '>
                    <p className='text-4xl text-transparent font-extrabold w-fit bg-clip-text bg-gradient-to-r from-emerald-500 to-white drop-shadow-xl shadow-2xl'>Sync your Clipboard</p>
                </div>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} className='w-full min-h-[70vh] bg-zinc-700 rounded-xl p-4'></textarea>
                <div className='flex flex-row w-full justify-center'>
                    <button onClick={handleSubmit} className='bg-emerald-500 px-4 py-2 rounded-lg drop-shadow-2xl shadow-lg hover:scale-90'>
                        Submit
                    </button>
                </div>

            </div>
        )
    }
}
