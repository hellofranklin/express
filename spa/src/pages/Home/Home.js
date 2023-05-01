import { Component } from "react";
import Header from "../../components/header/Header";
import FormBuilder from "../../components/formbuilder/FormBuilder";
import "./Home.css";
import WithAuth from "../../WithAuth";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <FormBuilder />
      </>
    );
  }
}

export default WithAuth(Home);
