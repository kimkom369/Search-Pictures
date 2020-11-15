import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID SQxTWAPABF0_qDex44i6_tn0fh63Mc35MJ5fTWC9ZAc'
     }
});