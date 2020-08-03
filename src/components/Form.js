import React from 'react';
import './Style.css'

const Form = ({
      user,
      submitted,
      onChange,
      onClick,
      }) => {
    const {firstname,lastname,email,isValidate,password,isMismatch,conFpassword,address,city,zip,state}=user || {};
    return(
        <div className="container">
            <div className="wrapper">
                <header className="title">
                    <h2>Sign Up</h2>
                </header>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" name='firstname' value={firstname}
                           data-testid="firstname" onChange={onChange} />
                    {submitted && !firstname && <div className="help-block">First name is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" name='lastname' value={lastname}
                           data-testid="lastname" onChange={onChange} />
                    {submitted && !lastname && <div className="help-block">Last name is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name='email' value={email}
                           data-testid="email" onChange={onChange} />
                    {submitted && !email && <div className="help-block">Email is required</div>}
                    {submitted && email && !isValidate && <div className="help-block">Wrong Format</div>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" name='password' value={password}
                           data-testid="password" onChange={onChange} />
                    {submitted && !password&& <div className="help-block">Password is required</div>}
                    {submitted && isMismatch && <div className="help-block">Password Dose Not Match</div>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password" name='conFpassword' value={conFpassword}
                           data-testid="conFpassword" onChange={onChange} />
                    {submitted && !conFpassword && <div className="help-block">Password is required</div>}
                    {submitted && isMismatch && <div className="help-block">Password Dose Not Match</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address" name='address' value={address}
                           data-testid="address" onChange={onChange} />
                    {submitted && !address && <div className="help-block">Address is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="City" name='city' value={city}
                           data-testid="city" onChange={onChange} />
                    {submitted && !city && <div className="help-block">city is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Zip" name='zip' value={zip}
                           data-testid="zip" onChange={onChange} />
                    {submitted && !zip && <div className="help-block">Zip is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="State" name='state' value={state}
                           data-testid="state" onChange={onChange} />
                    {submitted && !state && <div className="help-block">State is required</div>}
                </div>
                <div className="submit">
                    <button className="btn btn-success" onClick={onClick} data-testid="submit">
                        Sign Up <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
                <div data-testid="show-data"></div>
            </div>
        </div>
    )
};


export default (Form);