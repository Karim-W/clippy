import React from 'react'
import { useParams } from 'react-router-dom';
import { GetAClipBoardItemById } from '../api/apis';
import { ClipBoard } from '../models/clipboard';

export default function ClipViewer() {
    const [clipItem, setClipItem] = React.useState<ClipBoard | null>(null);
    let { id } = useParams();
    React.useEffect(() => {
        if (id) {
            GetAClipBoardItemById(id).then(res => {
                setClipItem(res)
            })
        }
    }, [])
    return (
        <div className='flex h-full flex-col gap-8'>
            <div className='flex flex-row '>
                <p className='text-4xl text-transparent font-extrabold w-fit bg-clip-text bg-gradient-to-r from-emerald-500 to-white drop-shadow-xl shadow-2xl'>Sync your Clipboard</p>
            </div>
            <div className='w-full min-h-[70vh] bg-zinc-700 rounded-xl p-4'>
                {clipItem && clipItem.clip}
            </div>
            <div className='flex flex-row w-full justify-center'>
            </div>

        </div>
    )
}
