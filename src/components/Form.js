import React from 'react';
import './Style.css'

const Form = ({
      user,
      submitted,
      onChange,
      onClick,
      }) => {

    return(
        <div className="container">
            <div className="wrapper">
                <header className="title">
                    <h2>Sign Up</h2>
                </header>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" name='firstname' value={user.firstname} onChange={onChange} />
                    {submitted && !user.firstname && <div className="help-block">First name is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" name='lastname' value={user.lastname} onChange={onChange} />
                    {submitted && !user.lastname && <div className="help-block">Last name is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name='email' value={user.email} onChange={onChange} />
                    {submitted && !user.email && <div className="help-block">Email is required</div>}
                    {submitted && user.email && !user.isValidate && <div className="help-block">Wrong Format</div>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" name='password' value={user.password} onChange={onChange} />
                    {submitted && !user.password && <div className="help-block">Password is required</div>}
                    {submitted && user.isMismatch && <div className="help-block">Password Dose Not Match</div>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password" name='conFpassword' value={user.conFpassword} onChange={onChange} />
                    {submitted && !user.conFpassword && <div className="help-block">Password is required</div>}
                    {submitted && user.isMismatch && <div className="help-block">Password Dose Not Match</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address" name='address' value={user.address} onChange={onChange} />
                    {submitted && !user.address && <div className="help-block">Address is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="City" name='city' value={user.city} onChange={onChange} />
                    {submitted && !user.city && <div className="help-block">city is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Zip" name='zip' value={user.zip} onChange={onChange} />
                    {submitted && !user.zip && <div className="help-block">Zip is required</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="State" name='state' value={user.state} onChange={onChange} />
                    {submitted && !user.state && <div className="help-block">State is required</div>}
                </div>
                <div className="submit">
                    <button className="btn btn-success" onClick={onClick}>
                        Sign Up <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    )
};


export default (Form);