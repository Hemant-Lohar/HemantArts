import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Routes/Home'
import Gallary from './Routes/gallary'
import Services from './Routes/Services'
import About from './Routes/About'
import Error from './Components/Error';

const App = () => {
    return (
        < >
            <Switch>
                <Route exact path="/" component={Home} ></Route>
                <Route path="/gallary" component={Gallary} ></Route>
                <Route path="/services" component={Services} ></Route>
                <Route path="/about" component={About} ></Route>
                <Route path="" component={Error} ></Route>
            </Switch>
        </ >
    )
}

export default App
