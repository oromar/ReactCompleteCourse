import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import {Header} from '../components/header'
import {NotFoundPage} from '../components/not-found'
import {HelpPage} from '../components/help'
import EditExpensePage from '../components/edit'
import CreateExpensePage from '../components/create'
import {ExpanseDashboardPage} from '../components/dashboard'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact={true} component={ExpanseDashboardPage}/>                        
                <Route path='/create' exact={true} component={CreateExpensePage}/>                        
                <Route path='/edit/:id' exact={true} component={EditExpensePage}/>                        
                <Route path='/help' exact={true} component={HelpPage}/>                        
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
