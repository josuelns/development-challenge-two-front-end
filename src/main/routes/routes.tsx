import React from 'react'
import { MakeAppointment } from '@/main/factories/pages'

import { BrowserRouter, Route as Switch, Route } from 'react-router-dom'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MakeAppointment} />
            </Switch>
        </BrowserRouter>
    )
}
