import { REST_API_METHOD as METHOD,  BASE_URL} from '../container'

const API_SCHEME = {
    // update when apply real authen api
    AUTHEN: {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGOUT: {
            url: `${BASE_URL}/logout`,
            method: METHOD.POST
        }
        
    },
    // business api
    ITEMS: {
        FETCH_LIST: {
            url: `${BASE_URL}/items`,
            method: METHOD.GET
        },
        FETCH_DETAIL: {
            url: `${BASE_URL}/items/:id`,
            method: METHOD.GET
        },
        CREATE: {
            url: `${BASE_URL}/items`,
            method: METHOD.POST
        },
        UPDATE: {
            url: `${BASE_URL}/items/:id`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/items/:id`,
            method: METHOD.DELETE
        },
        SEARCH:{
            url: `${BASE_URL}/search`,
            method: METHOD.GET
        },ADD:{
            url: `${BASE_URL}/add`,
            method: METHOD.POST
        },

    }
}

export default API_SCHEME