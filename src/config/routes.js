import React from "react";
import { Route, Routes } from "react-router-dom";
import { pathroutes } from "./routeParams";
export const renderRoutes=(pathroutes)=>{
    return pathroutes.map((route, index) => {
        const { path, DynComponent, isExact = true, childRoutes = [] } = route;
        return (
          <Route
            key={route.key || index}
            path={path}
            exact={isExact}
             element ={<DynComponent/>}
            // render={(routeProps) => {
            //   // const locationQueryString = get(routeProps, "location.search", "{}");
            //   // const domainName = get(routeProps, "staticContext.requestDomain", "");
            //   // const queryParams = querystring.parse(locationQueryString.slice(1));
            //   // routeProps.location.queryParams = queryParams;
            //   // routeProps.location.domainName = domainName;
            //   return <DynComponent {...routeProps} childRoutes={childRoutes} />;
            // }}
          >
            {childRoutes.map((childroutes,i)=>{
           
               const { path, DynComponent, isExact = true} = childroutes;
              return <Route    
              key={ i}
              path={path}
               element ={<DynComponent/>}/>
            })}
              
            </Route>
        );
      });
};
export function RootRoutes(props) {
    return (
      <React.Fragment>
        <Routes>{renderRoutes(pathroutes)}</Routes>
      </React.Fragment>
    );
  }