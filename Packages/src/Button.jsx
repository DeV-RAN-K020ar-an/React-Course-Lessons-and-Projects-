import React from 'react'
import { toast } from 'react-toastify'

const Button = () => {
    return (
        <main className='flex gap-2'>
            <button className='bg-green-500 w-30 h-15 rounded-xl text-white hover:bg-green-600 hover:cursor-pointer' onClick={() => {
                toast.success('Success Button Has Been Clicked!')
            }}>SUCCESS</button>
            <button className='bg-red-500 w-30 h-15 rounded-xl text-white hover:bg-red-600 hover:cursor-pointer' onClick={() => {
                toast.error('Error Button Has Been Clicked!')
            }}>ERROR</button>
            <button className='bg-yellow-500 w-30 h-15 rounded-xl text-white hover:bg-yellow-600 hover:cursor-pointer' onClick={() => {
                toast.warn('Warning Button Has Been Clicked!')
            }}>WARNING</button>
            <button className='bg-blue-400 w-30 h-15 rounded-xl text-white hover:bg-blue-600 hover:cursor-pointer' onClick={() => {
                toast.info('Info Button Has Been Clicked!')
            }}>INFO</button>
        </main>
    )
}

export default Button