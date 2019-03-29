import React from 'react';
import * as reactRouterDom from 'react-router-dom';
// Just render plain div with its children
reactRouterDom.BrowserRouter = ({children}) => <div>{children}</div>;
// tests will break when es6 export
module.exports = reactRouterDom;
