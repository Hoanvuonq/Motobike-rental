const importAll = (r) => r.keys().map(r);

const customerImages = importAll(require.context('../../assets/img', false, /customer-\d+\.jpg$/));
const actualDNImages = importAll(require.context('../../assets/img', false, /actual-dn-\d+\.jpg$/));
const actualNTImages = importAll(require.context('../../assets/img', false, /actual-nt-\d+\.jpg$/));

const getRandomCustomerImages = (count) => {
    return Array.from({ length: count }, () => customerImages[Math.floor(Math.random() * customerImages.length)]);
};

export const Data = {
    home: [
        ...customerImages,
        ...actualDNImages,
        ...actualNTImages
    ],
    danang: [
        ...actualDNImages,
        ...getRandomCustomerImages(10)
    ],
    nhatrang: [
        ...actualNTImages,
        ...getRandomCustomerImages(10)
    ]
};

export { customerImages, actualDNImages, actualNTImages };