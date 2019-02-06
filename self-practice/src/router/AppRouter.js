import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <switch>
                {/*<Route path = "/" component ={ExpenseDashboardPage} exact={true}/>*/}
                <Route component={NotFoundPage}/>
            </switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;