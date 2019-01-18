import React from "react";

class RentalDashboard extends React.Component {

    render(){
        return(
 
 <div ref = "master" className = "container">

    <BrowserRouter>
        <Switch>
            <Route exact path="/rental/new_rental" component={NewRental}/>
            <Route path="/rental/article_detail" component={Home_Dashboard}/>
            <Route path="/rental/find_article" component={About}/>
            <Route path="/rental/cart" component={About}/>
        </Switch>
    </BrowserRouter>
 </div>
        );
    }

}
