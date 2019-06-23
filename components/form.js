import React from "react";

class Form extends React.Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City"/>
          <input type="text" name="country" placeholder="Country"/>
          <button className="btn btn-primary">Submit</button>
          <div onChange={this.props.handleUnitChange}>
            <div className="row">
              <div className="col-md-3">
                <input type="radio" value="celsius" id="radioC" name="units" className="form-radio"/> <span className="weather__value">C</span> 
              </div>
              <div className="col-md-3">
                <input type="radio" value="fahrenheit" id="radioF" name="units" className="form-radio"/> <span className="weather__value">F</span>
              </div>   
              <div className="col-md-3">                     
                <input type="radio" value="kelvin"  id="radioK" name="units" className="form-radio" defaultChecked/> <span className="weather__value">K</span>
              </div>
            </div>   
          </div>
          

        </form>
        

      </div>
    );
  }
}

export default Form;