import React from "react";
import Store from "./Store";
import Card from "./Card";
import UserForm from "./UserForm";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

class App extends React.Component {
  render() {
    return (
      <Store>
        <AppHeader />
        <UserForm />
        <Card />
        <AppFooter />
      </Store>
    );
  }
}

export default App;
