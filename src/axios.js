import axios from 'axios';


export const my_instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});


// export default instance;