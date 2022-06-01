import { Helpers } from '../utils'
import ApiScheme from './scheme'


export const authApi = {
    login: Helpers.createApi(ApiScheme.AUTHEN.LOGIN),
    logout: Helpers.createApi(ApiScheme.AUTHEN.LOGOUT),
    validateToken: Helpers.createApi(ApiScheme.AUTHEN.VALIDATE_TOKEN)
}

export const itemApi = {
    fetchList: Helpers.createApi(ApiScheme.ITEMS.FETCH_LIST),
    fetchDelete: Helpers.createApi(ApiScheme.ITEMS.DELETE),
    fetchCreate: Helpers.createApi(ApiScheme.ITEMS.CREATE),
    fetchUpdate: Helpers.createApi(ApiScheme.ITEMS.UPDATE),
    fetchSearch: Helpers.createApi(ApiScheme.ITEMS.SEARCH),
    Add: Helpers.createApi(ApiScheme.ITEMS.ADD),

    
}