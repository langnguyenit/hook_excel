import {createAction} from "@reduxjs/toolkit"
import {actionTypes} from "../container"



export const ItemAction =  {
    fetchListRequest : createAction(actionTypes.ItemTypes.FETCH_ITEMS_REQUEST),
    fetchListSuccess : createAction(actionTypes.ItemTypes.FETCH_ITEMS_SUCCESS),
    fetchListFailure : createAction(actionTypes.ItemTypes.FETCH_ITEMS_FAILURE)
}
export const ItemActionDelete={
    fetchListRequest : createAction(actionTypes.ItemTypes.DELETE_ITEM_REQUEST),
    fetchListSuccess : createAction(actionTypes.ItemTypes.DELETE_ITEM_SUCCESS),
    fetchListFailure : createAction(actionTypes.ItemTypes.DELETE_ITEM_FAILURE)
}
export const ItemActionAdd={
    fetchListRequest : createAction(actionTypes.ItemTypes.CREATE_ITEM_REQUEST),
    fetchListSuccess : createAction(actionTypes.ItemTypes.CREATE_ITEM_SUCCESS),
    fetchListFailure : createAction(actionTypes.ItemTypes.CREATE_ITEM_FAILURE)
}
export const ItemActionUpdate={
    fetchListRequest : createAction(actionTypes.ItemTypes.UPDATE_ITEM_REQUEST),
    fetchListSuccess : createAction(actionTypes.ItemTypes.UPDATE_ITEM_SUCCESS),
    fetchListFailure : createAction(actionTypes.ItemTypes.UPDATE_ITEM_FAILURE)

}
export const ItemActionSearch={
    fetchListRequest : createAction(actionTypes.ItemTypes.SEARCH_ITEM_REQUEST),
    fetchListSuccess : createAction(actionTypes.ItemTypes.SEARCH_ITEM_SUCCESS),
    fetchListFailure : createAction(actionTypes.ItemTypes.SEARCH_ITEM_FAILURE)
}
export const AddData={
    AddDataRequest : createAction(actionTypes.ItemTypes.ADD_ITEM_REQUEST),
    AddDataSuccess : createAction(actionTypes.ItemTypes.ADD_ITEM_SUCCESS),
    AddDataFailure : createAction(actionTypes.ItemTypes.ADD_ITEM_FAILURE)
}

