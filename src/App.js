import React, { Component } from "react";
import RootNavigator from './navigator/rootNavigator';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider> 
        )
    }
}
export default App ;