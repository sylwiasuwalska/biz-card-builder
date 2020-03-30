import React from 'react';


import Store from './Store'
import Card from "./Card";
import UserForm from "./UserForm";


class App extends React.Component {


    render() {
        return (
            <Store>
                <UserForm/>
                <Card/>
            </Store>
        );
    }
}

export default App;

