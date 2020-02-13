import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  Login from './../components/Login/Login';
import MainScreen from './../components/Main/MainScreen';
import React ,{ Component } from 'react';
import {navigationRef} from './refNavigations';
let StackNavigator = createStackNavigator();
class RootNavigator extends Component{
    render(){
        return(
            <NavigationContainer ref={navigationRef}>
                <StackNavigator.Navigator initialRouteName='Login'>
                    <StackNavigator.Screen name='Login' component={Login} options={{headerShown:false}}/>
                    <StackNavigator.Screen name='Main' component={MainScreen} options={{headerShown:false}}/>
                </StackNavigator.Navigator>
            </NavigationContainer>
        )
        
    }
}
export default RootNavigator ;