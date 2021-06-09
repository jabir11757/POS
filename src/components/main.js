import React from 'react';
import Filter from './filter';
import FiltersP from './filtersP';
import Last from './last';
import Nav from './nav';
import Commerce from './wcommerce';
import Welcome from './welcome';



const Main = () => {
    return ( 
        <div>
            <Nav/> 
             <Welcome/>
             <Filter/>
             <FiltersP/>
             <Commerce/>
             <Last/>
           
        </div>
     );
}
 
export default Main;