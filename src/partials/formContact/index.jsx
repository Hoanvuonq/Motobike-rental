import React from 'react'
import Button from '../../components/button'
const FormContact = () => {
    return (
        <div className='bg-colorContact all-center flex-col gap-[2vw] p-[2vw] w-[60vw] form rounded-[0.5vw]'>
            <h1 className='font-title'>GỬI TIN NHẮN</h1>
            <div className="grid grid-cols-3 w-full gap-[1vw]">
                <input className='boxContact outline-none' placeholder='Tên đầy đủ *' required />
                <input className='boxContact outline-none' placeholder='Email *' required />
                <input className='boxContact outline-none' placeholder='Tiêu đề' required />
            </div>
            <textarea className='textareaContact outline-none h-[20vw]' placeholder='Tin nhắn' required />
            <Button title="Gửi Tin Nhắn" />
        </div>
    )
}

export default FormContact