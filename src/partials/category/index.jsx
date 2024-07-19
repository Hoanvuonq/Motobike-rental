import React, { useMemo } from 'react'
import SecTitle from '../../components/secTitle'
import { renderMoto } from './category'
import { Link } from 'react-router-dom'

const Category = () => {
    const listCategory = useMemo(() => {
        return [...Array(3).keys()].map((data, index) => {
            const dmdkdamkdf = `moto${data + 1}`
            const dataMotoBike = renderMoto(dmdkdamkdf)[dmdkdamkdf]
            const images = dataMotoBike.images
            const title = dataMotoBike.title[index]

            return <article className="items-category  mt-[4vw]">
                <div className="items-products w-[24vw] h-[26vw] relative border-[0.1vw] border-items bg-white shadow-lg">
                    <div className="items-content py-[2vw] all-center relative">
                        <img src={images} alt="Moto01" className='w-[23vw] h-[16vw] object-cover' />
                    </div>
                    <div className="fl-woo-item-bottom-content mt-[1vw] relative">
                        <div className="fl--woo-add-to-cart-wrap all-center pt-[1.5vw] mb-[20px]">
                            <p className='font-title'>{title}</p>
                            <div className="fl--order ">
                                <Link to={''} className="order-now bg-black">
                                    <p className='text-white'>Đặt xe ngay !</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        })
    }, [[renderMoto]])

    return (
        <div className='bg-order w-full '>
            <div className="all-center flex-col w-full">
                <SecTitle title='Danh mục xe máy - ô tô T-BIKE' />
                <p className='w-[40vw] text-center'>Toàn bộ xe máy - ô tô cho thuê của chúng tôi đều là những xe đời cao. Ngoài ra, các xe sau khi kết thúc hợp đồng với khách sẽ được kiểm tra, bảo dưỡng, thay thế các bộ phận hỏng hóc và phải đạt chuẩn an toàn xe trước khi giao cho khách hàng mới.</p>
            </div>
            <div className="all-center gap-[2vw]">
                {listCategory}
            </div>
        </div >
    )
}

export default Category