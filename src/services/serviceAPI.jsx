import axios from 'axios'

export async function fetchImg(inputQuery, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '38310415-880d668019c8861033767a4c2';
    const Options = new URLSearchParams({
        key: API_KEY,
        q: inputQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page
    });

    const images = await axios.get(`${BASE_URL}?${Options}`);
    return images.data;
    
    
}