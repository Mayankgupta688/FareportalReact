import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import AppComponent from "./AppComponent";
import EmployeeCountComponent from "./EmployeeCountComponent";
import rootReducer from "./Reducers/index";
import StockPrice from "./StockComponent";

var appStore = createStore(rootReducer)

ReactDOM.render((
    <div>
        <StockPrice apiUrl="https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI"></StockPrice>
        <Provider store={appStore}>
            <EmployeeCountComponent></EmployeeCountComponent>
            <AppComponent></AppComponent>
        </Provider>
    </div>
), document.getElementById("root"))


