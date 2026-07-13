import React from 'react'

const Flag = () => {
    return (
        <main className='h-screen flex justify-center items-center' style={{
            backgroundImage: 'url(/fr.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className='w-4/10 h-4/10 p-3 backdrop-blur-2xl shadow-xl bg-[#00000039] rounded-xl flex flex-col items-center justify-center gap-3'>
                <h2 className='text-white text-4xl font-black'>France</h2>
                <p className='text-2xl'>⭐⭐⭐⭐⭐</p>
                <p className='text-white text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate possimus accusantium sunt dolorem.</p>
            </div>
        </main>
    )
}

export default Flag