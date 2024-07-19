import React, { useEffect, useMemo } from 'react';
import SecTitle from '../../components/secTitle';
import Aos from 'aos'
import 'aos/dist/aos.css'
import IconTrust1 from '../../assets/img/icon-trust-1.png';
import IconTrust2 from '../../assets/img/icon-trust-2.png';
import IconTrust3 from '../../assets/img/icon-trust-3.png';
import IconTrust4 from '../../assets/img/icon-trust-4.png';
import IconTrust5 from '../../assets/img/icon-trust-5.png';
import IconTrust6 from '../../assets/img/icon-trust-6.png';

const listTrust = [
    { images: IconTrust1, title: "Nhiều lựa chọn", content: "Hàng trăm loại xe đa dạng ở nhiều địa điểm trên cả nước, phù hợp với mọi mục đích của bạn" },
    { images: IconTrust2, title: "Thuận tiện", content: "Dễ dàng tìm kiếm, so sánh và đặt chiếc xe như ý với chỉ vài click chuột" },
    { images: IconTrust3, title: "Giá cả cạnh tranh", content: "Giá thuê được niêm yết công khai và rẻ hơn tới 10% so với giá truyền thống" },
    { images: IconTrust4, title: "Tin cậy", content: "Các xe đều có thời gian sử dụng dưới 3 năm và được bảo dưỡng thường xuyên" },
    { images: IconTrust5, title: "Hỗ trợ 24/7", content: "Có nhân viên hỗ trợ khách hàng trong suốt quá trình thuê xe" },
    { images: IconTrust6, title: "Bảo hiểm", content: "An tâm với các gói bảo hiểm thuê xe tự lái trong suốt quá trình thuê xe" },
];

const Benefit = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const chunkedTrust = useMemo(() => {
        const chunkArray = (array, size) => {
            return array.reduce((result, item, index) => {
                const chunkIndex = Math.floor(index / size);
                if (!result[chunkIndex]) {
                    result[chunkIndex] = [];
                }
                result[chunkIndex].push(item);
                return result;
            }, []);
        };
        return chunkArray(listTrust, 2);
    }, [listTrust]);

    return (
        <div className="flex flex-col gap-[3vw] py-[2vw]">
            <SecTitle title='Lợi ích của T-BIKE' />
            <div className="flex flex-col gap-[2vw]">
                {chunkedTrust.map((pair, index) => (
                    <div key={index} className="flex gap-[4vw]">
                        {pair.map(({ images, title, content }, innerIndex) => (
                            <div key={innerIndex} data-aos="fade-up" className="flex items-center gap-[1.5vw] w-[40vw] trust">
                                <img src={images} alt="icon trust" className='w-[5vw] h-[5vw]  scale-icon' />
                                <div className="flex flex-col items-start gap-[1vw]">
                                    <p className='font-title'>{title}</p>
                                    <p className='font-content'>{content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefit;
