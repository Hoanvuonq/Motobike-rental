import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import iconSearch from '../../assets/icon/search.svg';
import { useTranslation } from 'react-i18next';
import Button from '../button';

const Search = () => {
    const { t } = useTranslation();
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
            <div className="bg-white md:rounded-[0.2vw] rounded-[1.5vw] xl:w-[70vw] lg:w-[80vw] w-[90vw] all-center lg:gap-[1vw] gap-[5vw] !justify-around md:flex-row flex-col  md:p-[2vw] p-[10vw] border-boxSearch">
                <div className="all-center md:flex-row flex-col lg:w-[50vw] w-[80vw] md:gap-[1vw] gap-[3vw] select-box">
                    <Select variant="outlined" size='lg' animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }} label="Lựa Chọn Địa Điểm" onChange={(e) => setLocation(e)}>
                        <Option value="Nha Trang">Nha Trang</Option>
                        <Option value="Đà Nẵng">Đà Nẵng</Option>
                    </Select>
                    <Select variant="outlined" size='lg' animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }} label="Lựa Chọn Phương TIện" >
                        <Option value="Tất Cả">Tất Cả</Option>
                        <Option value="Xe Máy">Xe Máy</Option>
                        <Option value="Ô tô">Ô tô</Option>
                    </Select>
                    <Select variant="outlined" size='lg' animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }} label="Comming Soon ...">
                        <Option value="Tất Cả">Tất Cả</Option>
                    </Select>
                </div>
                <div className="">
                    <Button images={iconSearch} title={t("search")} onClick={handleSearch} />
                </div>
            </div>
        </div>
    );
}

export default Search;
