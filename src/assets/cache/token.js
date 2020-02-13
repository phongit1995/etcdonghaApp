import AsyncStorage  from '@react-native-community/async-storage';
export const getToken = async ()=>{
    let token = await AsyncStorage.getItem('token');
    if(token==null || token==""){
        return null ;
    }
    return token ;
}
export const saveToken = async (token)=>{
    await AsyncStorage.setItem('token',token);
    return null ;
}