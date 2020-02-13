import * as actionType from './actionType';
import axios from 'axios';
import * as Navigator from './../navigator/refNavigations';
export const ResetLogin = ()=>{
    return{
        type:actionType.RESET_LOGIN_FAIL
    }
}
export const login = (username,passowrd)=>{
    return async dispatch =>{
        dispatch( Navigator.reset({
            index:1,
            routes:[
                {name:'Main'}
            ]
        }))
    //     console.log(username,passowrd);
    //    let result =await axios({
    //        method:'POST',
    //        url:'https://apietcdongha.herokuapp.com/users/login',
    //        headers:{
    //             'Content-Type':'application/json'
    //        },
    //        data:{
    //         "username":username.trim(),
    //         "password":passowrd.trim()
    //         }
           
    //    });
    //    if(result.status==200){
    //        if(!result.data.data.error){
               
    //        }
    //    } 
    }
}