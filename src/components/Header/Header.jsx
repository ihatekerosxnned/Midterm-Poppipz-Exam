import './Header.css'
import React from 'react';

class Header extends React.Component {
  render(){
    return(
<section class="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark itot">
   <div class="container-fluid">
      <div class="row  justify-content-center align-items-center d-flex text-center h-100">
        <div class="col-12 col-md-8  h-50 gago">
            <h1 class="display-2  text-light mb-2 mt-5 "><strong>Popular People</strong> </h1>
            <p class="lead  text-light mb-5">Famous Faces: Discovering the Asia's Most Celebrated Personalities.</p>   
        </div> 
      </div>
    </div>
    </section>      
    );
  }
}

export default Header;
