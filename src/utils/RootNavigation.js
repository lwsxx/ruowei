//导航工具
import * as React from 'react';
//在没有导航工具的情况下进行导航
export const navigationRef = React.createRef();

export function navigate(name,params) {
    navigationRef.current?.navigate(name,params);

}