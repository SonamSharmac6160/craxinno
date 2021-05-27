// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { renderInput } from "../../constants/redux-form";
import { Field, reduxForm } from "redux-form";
import { required } from "../../constants/validation";

import { Nav, Footer, LoaderScreen } from "../includes";
import { setLoader } from "../../actions";
import Plot from 'react-plotly.js';


class Home extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      twoDimData: '',
      monthly_payment: localStorage.getItem('monthly_payment')
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.setLoader(false);
  }

  handleChange(e) {
    this.setState({
      monthly_payment: e.target.value
    })
    localStorage.setItem('monthly_payment', e.target.value)
  }

  onSubmit = formValue => {
    var a = [];
    a = JSON.parse(localStorage.getItem('userData')) || [];
    a.push(formValue.balance);
    localStorage.setItem('userData', JSON.stringify(a));
  }

  render() {
    if (this.props.isLoading) {
      return <LoaderScreen />;
    }

    var getBalnace = [];
    getBalnace = JSON.parse(localStorage.getItem('userData')) || [];

    let numberBal = []
    numberBal =
      getBalnace.map((person, index) => (
        Number(person)
      ))

    let sumOfBalance = numberBal.reduce((a, b) => a + b, 0)
    let balanceArr = []
    let indexBal = []
    var xAxis = sumOfBalance
    for (var i = 0; i < sumOfBalance; i++) {
      if (i == 0) { balanceArr.push(xAxis)
      indexBal.push(i) }
      xAxis = xAxis - Number(this.state.monthly_payment)
      if (xAxis >= 0) {
        balanceArr.push(xAxis)
        indexBal.push(i+1)
      }
    }

    var trace1 = [
      {
        x: indexBal,
        y: balanceArr,
        type: 'scatter'
      }
    ];
    var data = trace1;

    return (
      <div className="small-form-page">
        <Nav />



        <main id="main" className="main-height">
          <div className="inner-page-h container pt-form">

            <div className="row">
              <div className="col-md-12 pt-3 pt-md-4 pt-lg-5 pb-3 pb-md-4 mt-1">



                <div className="row em-table">
                  <div className="col-xl-12">
                    <div className="card brdr-card">


                      <div className="card-body">
                        <div className="pb-3"><h2 className="card-h2">Initial Balance: {sumOfBalance}</h2></div><div className="pb-3"><h2 className="card-h2">Count: {getBalnace.length}</h2></div>
                        <label className="balnace">Monthly Payment:</label>
                        <Field name="monthly_payment" type="text" id="monthly_payment" placeholder={`Monthly Payment`} component={renderInput} onChange={this.handleChange} />

                        {getBalnace.map((person, index) => (
                          <p><span className="balnace">Balance: {Number(person)}</span><br /></p>
                        ))}

                        <form
                          name="addUserForm"
                          onSubmit={this.props.handleSubmit(this.onSubmit)}
                          className="form"
                        >
                          <div className="row justify-content-center">
                            <div className="col-md-12">
                              <label className="balnace">Balance:</label>
                              <Field name="balance" type="text" id="balance" placeholder={`Balance`} component={renderInput} onChange={this.handleChange} validate={required} />
                            </div>

                            <div className="col-md-4 pt-2">
                              <button type="submit" className="btn btn-block btn-red mb-2"><span className="glyphicon glyphicon-off"></span>Submit</button>
                            </div>
                          </div>
                        </form>
                        <Plot
                          data={data}
                          style={{ width: '100%', height: '100%' }}
                          useResizeHandler
                          layout={{
                            autosize: true,
                            showlegend: true,
                            margin: { t: 50 },
                            hovermode: 'closest',
                            bargap: 0,
                            xaxis: {
                              domain: [0, 0.85],
                              showgrid: false,
                              zeroline: false
                            },
                            yaxis: {
                              domain: [0, 0.85],
                              showgrid: false,
                              zeroline: false
                            },
                            xaxis2: {
                              domain: [0.85, 1],
                              showgrid: false,
                              zeroline: false
                            },
                            yaxis2: {
                              domain: [0.85, 1],
                              showgrid: false,
                              zeroline: false
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </main>

        <Footer />

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.service ? state.service.isLoading : ""
  };
};

export default connect(mapStateToProps, {
  setLoader
})(
  reduxForm({
    form: "accountForm",
    touchOnChange: true,
    enableReinitialize: true
  })(Home)
);
