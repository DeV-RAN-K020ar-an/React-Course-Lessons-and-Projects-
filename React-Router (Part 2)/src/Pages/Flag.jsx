import React from 'react'
import { useParams } from 'react-router'
import flags from './flags'

const Flag = () => {
    const { id } = useParams()
    const showObject = flags.find((flag) => {
        return flag.id == id
    })

    return (
        <main className='h-screen flex justify-center items-center' style={{
            backgroundImage: `url(${showObject.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className='w-4/10 h-4/10 p-3 backdrop-blur-2xl shadow-xl bg-[#00000039] rounded-xl flex flex-col items-center justify-center gap-3'>
                <h2 className='text-white text-4xl font-black'>{showObject.name}</h2>
                <p className='text-2xl'>{showObject.stars}</p>
                <p className='text-white text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate possimus accusantium sunt dolorem.</p>
            </div>
        </main>
    )
}

export default Flag