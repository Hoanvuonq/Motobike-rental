import React from 'react'
import Search from '../search'

const Banner = () => {
    return (
        <div className='bg-banner all-center w-full xl:h-screen h-full'>
            <div className="banner w-full all-center flex-col gap-[4vw] absolute z-10">
                <div className="all-center flex-col xl:gap-[1vw] gap-[3vw]">
                    <p className='text-mainColor font-slogan'>ĐƯA CHUYẾN ĐI LÊN MỘT TẦM CAO MỚI</p>
                    <h1 className='font-title text-white'>TÌM XE MÁY CỦA BẠN</h1>
                    <p className='font-content text-white'>Tìm kiếm chiếc xe máy lý tưởng của bạn tại đại lý đang phát triển T- BIKE.</p>
                </div>
                <Search />
            </div>
            <div className="bg-overlay" />
        </div>
    )
}
export default Banner