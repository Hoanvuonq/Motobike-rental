import axios from 'axios';

const getLocationInfo = async () => {
    try {
        const response = await axios.get(`https://ipinfo.io/json?token=6afad0bc31935b`);
        return response.data;
    } catch (error) {
        console.error("Error fetching location info:", error);
        return null;
    }
};

export default getLocationInfo