import * as React from 'react';
import {CommonActions} from '@react-navigation/native';
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function push(...args) {
    navigationRef.current?.dispatch(CommonActions.push(...args));
}
export function reset(...args){
    navigationRef.current?.dispatch(CommonActions.reset(...args));

}