import axios from "axios";
const API_URL = 'https://dist.nd.ru/api';


const setAuthHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const api = {
    note: {
        getNotes : async () => {
            try {
                const response = await axios.get(`${API_URL}/notes`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                        'accept': 'application/json'
                    }
                });
                const token = response.data;
                setAuthHeader(token);
                return token;
            }catch (error){
                return false;
            }
        },
        addNote : async (title, content) => {
            try {
                const response = await axios.post(`${API_URL}/notes`,
                    {"title": title, "content": content},
                    {headers:{
                            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                            'accept': 'application/json'
                        }});
                const token = response.data;
                setAuthHeader(token);
                return true;
            } catch (error) {
                if (error.response.status === 400) {
                    return  'Ошибка в запросе';
                }else if (error.response.status === 401){
                    return 401;
                }
                return 'Ошибка!';
            }
        },
        deleteNote : async (id) =>{
            try {
                await axios.delete(`${API_URL}/notes/${id}`,
                    {headers: {
                            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }});
                return true;
            } catch (error) {
                if (error.response.status === 400) {
                    return  400;
                }else if (error.response.status === 401){
                    return ('Требуется авторизация');
                }
                return 'Ошибка!';
            }
        },
    },


    auth: {
        getUserData: async () => {
            try {
                const response = await axios.get(`${API_URL}/auth`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                        'accept': 'application/json'
                    }
                });
                const token = response.data;
                localStorage.setItem('id', token.id);
                setAuthHeader(token);
                return token;
            }catch (error){
                return false;
            }
        },
        login: async (email, password) => {
            try {
                const response = await axios.post(`${API_URL}/auth`,
                    {"email": email, "password": password });
                const token = response.data['accessToken'];
                localStorage.setItem('accessToken', token);
                setAuthHeader(token);
                return true;
            } catch (error) {
                if (error.response.status === 400) {
                    return  'Ошибка в запросе';
                }else if (error.response.status === 404){
                    return 'Комбинация логин/пароль не найдена';
                }
                return 'Ошибка!';
            }
        },
        exitAccount: async () =>{
            try {
                const response = await axios.delete(`${API_URL}/auth`,
                    {headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                        'accept': '*/*',
                    }});
                const token = response.data.token;
                localStorage.setItem('accessToken', '');
                setAuthHeader(token);
                return true
            }catch (error){
                console.log (error);
                return false
            }
        }
    },
    reg: {
        registration: async (email, password, confirm_password) =>{
            try {
                const response = await axios.post(`${API_URL}/reg`,
                    {email, password, confirm_password});
                const token = response.data.token;
                setAuthHeader(token);
                return true;
            }catch (error){
                if (error.response.status === 400) {
                    return  'Ошибка в запросе';
                }else if (error.response.status === 409){
                    return ('Пользователь с таким e-mail уже зарегистрирован');
                }
                return 'Ошибка!';
            }
        },
    },
};