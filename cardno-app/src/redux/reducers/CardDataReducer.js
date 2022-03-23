const initialState = [];
const CardDataReducer=(state=initialState,action)=>{
    if(action.type=="CHANGEDATA"){
        return action.payload
    }else{
        return state;
    }
}
export default CardDataReducer;