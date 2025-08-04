
export const isDev = false; // use this to toggle for development. 

const API_BASE_URL = isDev ? "http://localhost:4000/api" : "https://dev111.osmrtnica.com/be/api" 
export default API_BASE_URL;
