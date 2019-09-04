import React, { Component } from 'react';
// import { NONAME } from 'dns';

class App extends Component {
  constructor(props) {                                                            
    super(props);
    this.state = {
      amountDue:0,
      amountReceived: 0,
      total: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleCalculate() {
    let changeDue = {
      twentie: 2000,
      ten: 1000,
      five: 500,
      dollar: 100,
      quarter: 25,
      dime: 10,
      nickel: 5,
      pennie: 1,
  };
                       // Calculate Money
  let totalChange = this.state.amountReceived - this.state.amountDue;
  let totalAmountDue = (this.state.amountReceived - this.state.amountDue) * 100;   // multiply by 100 to get rid of decimal

  var twenty = Math.floor(totalAmountDue/changeDue.twentie)
  totalAmountDue = totalAmountDue - (twenty * changeDue.twentie)

  var ten = Math.floor(totalAmountDue/changeDue.ten)
  totalAmountDue = totalAmountDue - (ten * changeDue.ten)

  var five = Math.floor(totalAmountDue/ changeDue.five)
  totalAmountDue = totalAmountDue - (five * changeDue.five)

  var dollar = Math.floor(totalAmountDue/changeDue.dollar);            // 6 = (664 / 100 ) = 6.64 - floor - will assin 6 to dollar 
  totalAmountDue = totalAmountDue -(dollar * changeDue.dollar);       // 64 = 664 -(6 * 100 ) // reassigning totalAmoount due to 14 dollars

  var quarter = Math.floor(totalAmountDue/changeDue.quarter);         // 2 = ( 64 / 25) - math.floor will assign 2 to quarters
  totalAmountDue = totalAmountDue -(quarter * changeDue.quarter);     // 14 = 64 -(2 * 25) reassigning totalAmount to 14 dollars

  var dime = Math.floor(totalAmountDue/changeDue.dime);
  totalAmountDue = totalAmountDue -(dime * changeDue.dime);

  var nickel = Math.floor(totalAmountDue/changeDue.nickel);
  totalAmountDue = totalAmountDue -(nickel * changeDue.nickel);

  var penny = Math.round(totalAmountDue/changeDue.pennie);
  totalAmountDue = totalAmountDue -(penny * changeDue.pennie);

                       // updating state
  this.setState(
    { 
      total: totalChange,
      twenties: twenty,
      tens: ten,
      fives: five,
      dollars: dollar,
      dimes: dime,
      quarters: quarter,
      nickels: nickel ,
      pennies: penny
    }
  )
  // this.state.twenties = twenty;
  // this.state.tens = ten;
  // this.state.fives = five;
  // this.state.dollars = dollar;
  // this.state.quarters = quarter;
  // this.state.dimes = dime;
  // this.state.nickels = nickel;
  // this.state.pennies = penny;

  }
  

  render() {
    return (
      <div className='global-container'>

                                  {/* <!-- user inputs --> */}
          <form>
            <div className="form-group w-25" >
              <label for="formGroupExampleInput">How much is due?</label>
              <input type="text" className="form-control" name='amountDue' id="formGroupExampleInput" placeholder="due?" // changes name ='due'
                                                              value={this.state.amountDue} onChange={this.handleChange}/>
            </div>
            <div className="form-group w-25">
              <label for="formGroupExampleInput2">How much was received?</label>
              <input type="text" className="form-control" name='amountReceived' id="formGroupExampleInput2" placeholder="received?" // changed name = 'received'
                                                              value={this.state.amountReceived} onChange={this.handleChange}/>

              <button type="button" className="btn btn-primary" onClick={this.handleCalculate}>Calculate</button>
            </div>
          </form>

                               {/* display results */}
            
              {/* {this.state.amountReceived < this.state.amountDue ? `<div className = 'alert alert-danger'>Insuffecient Funds</div>` : null} */}
            
            <div className = 'alert alert-success'>The total change due is ${this.state.total}</div>
            <h1>Twenties</h1>
            <p className='change'>{this.state.twenties}</p>

            <h1>Tens</h1>
            <p className='change'>{this.state.tens}</p>

            <h1>Fives</h1>
            <p className='change'>{this.state.fives}</p>

            <h1>Dollars</h1>
            <p className='change'>{this.state.dollars}</p>

            <h1>Quarters</h1>
            <p className='change'>{this.state.quarters}</p>

            <h1>Dimes</h1>
            <p className='change'>{this.state.dimes}</p>

            <h1>Nickels</h1>
            <p className='change'>{this.state.nickels}</p>

            <h1>Pennies</h1>
            <p className='change'>{this.state.pennies}</p>
            

      </div>
    )
  }
}

export default App;