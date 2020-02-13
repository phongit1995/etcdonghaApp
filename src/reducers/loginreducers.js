const initalState = {
    loginFail:false ,
    userInfo:{},
    token:null
}
const LoginReducers= (state=initalState,action)=>{
    switch (action.type) {
        case 1:
            return state
            break;
    
        default:
            return state
            break;
    }
}
export default LoginReducers ;