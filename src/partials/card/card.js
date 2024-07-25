export const renderMotoCard = (name) => {
    return {
        [name]: {
            images: require(`../../assets/icon/${name}.png`),
            title: ['Honda SH', 'Vespa', 'Ablade', 'PCX', 'Lead', 'Yamaha grande', 'Vsion', 'NVX', 'Exiter 155', 'Winner', 'yamaha PG1', 'Sirius', 'Jupiter', 'Wave', 'Honda XR 150l', 'Ô TÔ'],
            type: [
                'rentalDaNang.scooters',
                'rentalDaNang.scooters',
                'rentalDaNang.scooters',
                'rentalDaNang.scooters',
                'rentalDaNang.scooters',
                'rentalDaNang.scooters',
                'rentalDaNang.scooters',
                'rentalDaNang.scooters',
                'rentalDaNang.manualMotorcycle',
                'rentalDaNang.manualMotorcycle',
                'rentalDaNang.manualMotorcycle',
                'rentalDaNang.motorbikes',
                'rentalDaNang.motorbikes',
                'rentalDaNang.motorbikes',
                'rentalDaNang.manualMotorcycle',
                'rentalDaNang.car'
            ],
            location: [
                'banner.locationDaNang',
                'banner.locationNhaTrang',
            ]
        }
    }
}