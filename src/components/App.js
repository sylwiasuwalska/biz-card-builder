import React from 'react';
import Store from './Store'
import Card from "./Card";
import UserForm from "./UserForm";
import HeaderApp from "./HeaderApp";



class App extends React.Component {


    render() {
        return (

            <Store>
                <HeaderApp/>
                <UserForm/>
                <Card/>
            </Store>
        );
    }
}

export default App;

