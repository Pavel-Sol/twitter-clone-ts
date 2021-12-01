import {
   Switch,
   Route,
   Redirect
 } from 'react-router-dom';

import Home from '../pages/home/Home';
import SinIn from '../pages/sinIn/SinIn';


const Router = () => {
   const isAuth = true

   return (
      <>
         {
            isAuth
            ? (<Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               {/* <Redirect to='/' /> */}
            </Switch>)

            : (<Switch>
               <Route path="/signin">
                  <SinIn />
               </Route>
               <Redirect to='/signin' />
            </Switch>)
         }
      </>
   )
}

export default Router