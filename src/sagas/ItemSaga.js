import { takeLatest, put } from 'redux-saga/effects'
import { ItemAction,ItemActionDelete,ItemActionAdd,ItemActionUpdate ,ItemActionSearch} from '../actions'
import { actionTypes } from '../container'
import { itemApi } from '../api'
import {LIMIT} from '../container/index'

function* handleFetchListItems({ payload }) {
    try {
        const res = yield itemApi.fetchList(null,{_page: `${payload.activePage}&limit=${LIMIT}`},null)
        console.log("res",res)
        yield put(ItemAction.fetchListSuccess({
            list : res.data,
            totalPage:res.totalPage,
            activePage:payload.activePage,
            totalRecord:res.totalRecord
        }))
    } catch (error) {
        yield put(ItemAction.fetchListFailure({
            message: error.message
        }))
    }
}
function* handleFetchDeleteItems({ payload}){
    try {
        yield itemApi.fetchDelete(payload,null,null)
        yield put(ItemActionDelete.fetchListSuccess())
        yield put(ItemAction.fetchListRequest({activePage:1}))
    } catch (error) {
        yield put(ItemActionDelete.fetchListFailure(error))
    }
}

function* handleFetchAddItems({payload}){

    try {
       const res = yield itemApi.fetchCreate(null,null,payload.form)
       yield put(ItemActionAdd.fetchListSuccess())
        yield put(ItemAction.fetchListRequest({activePage:1}))    
    } catch (error) {
        yield put(ItemActionAdd.fetchListFailure(error))
    }
}
function* handleFetchUpdateItems({ payload}){
    try {
        yield itemApi.fetchUpdate({id:payload.id},null,{name:payload.name})
        yield put(ItemActionUpdate.fetchListSuccess())
        yield put(ItemAction.fetchListRequest({activePage:1}))    
    } catch (error) {
        yield put(ItemActionUpdate.fetchListFailure(error))
    }
}
function* handleFetchSearchItems({ payload}){
  
    try {
        const res = yield itemApi.fetchSearch(null,{_page:`${payload.activePage}&_limit=${LIMIT}&textSearch=${payload.textSearch}`},null)
        console.log(res,"du  lieu ve")
        yield put(ItemActionSearch.fetchListSuccess({
            list : res.data,
            totalPage:res.totalPage,
            activePage:payload.activePage
        }))
    } catch (error) {
        yield put(ItemActionSearch.fetchListFailure(error))
    }
}
function* handleFetchAdd({ payload}){
    try {
        yield itemApi.fetchCreate(null,null,payload)
        yield put(ItemActionAdd.fetchListSuccess())
         yield put(ItemAction.fetchListRequest({activePage:1}))    
     } catch (error) {
         yield put(ItemActionAdd.fetchListFailure(error))
     }
}

const itemSaga = [
    takeLatest(actionTypes.ItemTypes.FETCH_ITEMS_REQUEST, handleFetchListItems),
    takeLatest(actionTypes.ItemTypes.DELETE_ITEM_REQUEST, handleFetchDeleteItems),
    takeLatest(actionTypes.ItemTypes.CREATE_ITEM_REQUEST, handleFetchAddItems),
    takeLatest(actionTypes.ItemTypes.UPDATE_ITEM_REQUEST, handleFetchUpdateItems),
    takeLatest(actionTypes.ItemTypes.SEARCH_ITEM_REQUEST,handleFetchSearchItems),
    takeLatest(actionTypes.ItemTypes.ADD_ITEM_REQUEST,handleFetchAdd),
   
]

export default itemSaga;