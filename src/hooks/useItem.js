import { useDispatch, useSelector } from "react-redux"
import { ItemAction ,ItemActionDelete,ItemActionAdd,ItemActionUpdate,ItemActionSearch,AddData} from '../actions'


export const useItem = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.itemCollection.list)
    
    const isFetching = useSelector(state => state.itemCollection.isFetching)
    const isError = useSelector(state => state.itemCollection.isError)
    const message = useSelector(state => state.itemCollection.message)


    const totalPage = useSelector(state => state.itemCollection.totalPage)
    const activePage= useSelector(state => state.itemCollection.activePage)
    const totalRecord= useSelector(state => state.itemCollection.totalRecord)
    

    const handleFetchList = (data) => dispatch(ItemAction.fetchListRequest(data))
    const handleFetchDelete=(data)=> dispatch(ItemActionDelete.fetchListRequest(data))
    const handleFetchCreate=(data)=>dispatch(ItemActionAdd.fetchListRequest(data))
    const handleFetchUpdate=(data)=>dispatch(ItemActionUpdate.fetchListRequest(data))
    const handleFetchSearch=(data)=>dispatch(ItemActionSearch.fetchListRequest(data))
    const handleAddData=(data)=>dispatch(AddData.AddDataRequest(data))
    return {
        list,
        isFetching,
        isError,
        message,
        totalPage,
        activePage,
        totalRecord,
        handleFetchList,
        handleFetchDelete,
        handleFetchCreate,
        handleFetchUpdate,
        handleFetchSearch,
        handleAddData


    }
    
}