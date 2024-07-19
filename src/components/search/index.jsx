import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import iconSearch from '../../assets/icon/search.svg';

const Search = () => {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (location === 'Nha Trang') {
            navigate('/rental-nhatrang');
        } else if (location === 'Đà Nẵng') {
            navigate('/rental-danang');
        }
    };

    return (
        <div className='all-center w-full search relative'>
            <div className="bg-white md:rounded-[0.2vw] rounded-[1.5vw] lg:w-[70vw] w-[90vw] all-center !justify-around md:flex-row flex-col gap-[1vw] md:p-[2vw] p-[7vw] border-boxSearch">
                <div className="flex items-center md:flex-row flex-col w-[50vw] md:gap-[1vw] gap-[3vw] select-box">
                    <Select variant="outlined" label="Lựa Chọn Địa Điểm" onChange={(e) => setLocation(e)}>
                        <Option value="Nha Trang">Nha Trang</Option>
                        <Option value="Đà Nẵng">Đà Nẵng</Option>
                    </Select>
                    <Select variant="outlined" label="Lựa Chọn Phương TIện">
                        <Option value="Tất Cả">Tất Cả</Option>
                        <Option value="Xe Máy">Xe Máy</Option>
                        <Option value="Ô tô">Ô tô</Option>
                    </Select>
                    <Select variant="outlined" label="Comming Soon ...">
                        <Option value="Tất Cả">Tất Cả</Option>
                    </Select>
                </div>
                <button type='button' onClick={handleSearch} className='btn-box all-center md:p-[0.9vw] p-[0.7vw] relative rounded-[0.2vw]'>
                    <div className="flex items-center">
                        <img src={iconSearch} alt="iconSearch" className='md:w-[2vw] w-[6vw]' />
                        <p className='font-search uppercase'>Tìm Kiếm</p>
                    </div>
                    <span className='design-box rounded-[0.2vw]'></span>
                </button>
            </div>
        </div>
    );
}

export default Search;
