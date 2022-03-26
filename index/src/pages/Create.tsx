import React from 'react'
import { CreateAClipBoardItem } from '../api/apis'

export default function Create() {
    const [body, setBody] = React.useState('')
    async function handleSubmit() {
        console.log('body', body)
        let res = await CreateAClipBoardItem(body)
        console.log('res', res)
    }
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
