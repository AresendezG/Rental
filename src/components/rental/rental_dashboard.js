import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {RentalHome} from "./rental_home";
import {ArticleDetail} from "./article_detail";
import {FindArticle} from "./find_article";
import {FinishTicket} from "./finish_ticket";

export class RentalDashboard extends React.Component {

    render(){
        return(

 <div ref = "master" className = "container">

    <BrowserRouter>
        <Switch>
            <Route exact path="/rental/new_rent_ticket" component={RentalHome}/>
            <Route path="/rental/article_detail" component={ArticleDetail}/>
            <Route path="/rental/find_article" component={FindArticle}/>
            <Route path="/rental/cart" component={FinishTicket}/>
        </Switch>
    </BrowserRouter>
 </div>
        );
    }

}
