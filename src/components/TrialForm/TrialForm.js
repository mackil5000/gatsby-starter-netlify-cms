import React, { Component } from "react";
import Button from "../Button";
import store from '../../store';
import AutoComplete from "./AutoComplete";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";


class TrialForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      companyId: "",
      checked: false
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCompanyInfo = this.getCompanyInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    const endpoint = "https://postb.in/zOfWyxHz";
    const payload = JSON.stringify(this.state);

    fetch(endpoint, {
      method: "POST",
      body: payload
    }).then(console.log("Tack för att du signade upp")).catch(err => {
      console.error("Problem reaching the API")
    })
    event.preventDefault();
  }

getCompanyInfo(event) {
  this.setState({
    company: event.target.text,
    companyId: event.target.value
  })
  console.log(this.state.companyId)
}

  // supports future implm of a consent checkbox
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {

return (
  <Provider store={store}>
      <form
        onSubmit={this.handleSubmit}
        id="formSignupMoreInfo"
        name="formSignupMoreInfo"
        className="topLabel page"
        enctype="multipart/form-data"
        method="post"
        novalidate
        action="#"
      >
        <div className="form-group form-2col-left">
          <input
            type="text"
            className="form-control"
            id="formInputFirstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group form-2col-right">
          <input
            type="text"
            className="form-control"
            id="formInputLastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <div id="moreInfoFormAutocompleteContainer" className="form-group">
        <AutoComplete getCompanyInfo={this.getCompanyInfo} />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="formInputEmail"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            id="formInputTelId"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
          <input type="checkbox" name="vehicle1" value={this.state.checked}/>
        </div>
    

        <Button buttonText="Skapa ditt konto" buttonColor="btn-white" />
      </form>
      </Provider>
    );

  }
}

export default TrialForm;