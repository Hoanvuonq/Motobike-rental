// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "home": "Home",
            "rentalDanang": "Motorbike Rental - Da Nang",
            "rentalNhatrang": "Motorbike Rental - Nha Trang",
            "contact": "Contact",
            "call_now": "Call Us Today !",
            "phone_number": "0983477477",
            "sloganHeader": "TAKING RIDES TO A NEWER LEVEL",
            "titleHeader": "FIND YOUR MOTORCYCLE",
            "contentHeader": "Find your ideal motorcycle at the growing dealership T- BIKE.",
            "search": "Search Now",

        },
    },
    vi: {
        translation: {
            "home": "Trang chủ",
            "rentalDanang": "Cho Thuê Xe Máy - Đà Nẵng",
            "rentalNhatrang": "Cho Thuê Xe Máy - Nha Trang",
            "contact": "Liên hệ",
            "call_now": "Đặt xe ngay !",
            "phone_number": "0983477477",
            "sloganHeader": "ĐƯA CHUYẾN ĐI LÊN MỘT TẦM CAO MỚI",
            "titleHeader": "TÌM XE MÁY CỦA BẠN",
            "contentHeader": "Tìm kiếm chiếc xe máy lý tưởng của bạn tại đại lý đang phát triển T- BIKE.",
            "search": "Tìm Kiếm",
        },
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi',
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;
