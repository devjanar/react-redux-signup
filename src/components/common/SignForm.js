import React from 'react';
import InputForm from './InputForm'
import '../Style.css'

const SignForm = ({
      user,
      submitted,
      onChange,
      onSubmit,
      }) => {
    const {firstname,lastname,email,isValidate,password,isMismatch,conFpassword,address,city,zip,state}=user || {};
    return(
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <InputForm
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstname"
                    value={firstname}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="First name"
                    testid="firstname"
                />
            </div>
            <div className="form-group">
                <InputForm
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastname"
                    value={lastname}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="Last name"
                    testid="lastname"
                />
            </div>
            <div className="form-group">
                <InputForm
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="Email"
                    testid="email"
                />
                {submitted
                    && email && !isValidate
                    && <div className="warning-block">Wrong Format</div>
                }
            </div>
            <div className="form-group">
                <InputForm
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="Password"
                    testid="password"
                />
            </div>
            <div className="form-group">
                <InputForm
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="conFpassword"
                    value={conFpassword}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="Confirm password"
                    testid="conFpassword"
                />
                {submitted
                    && isMismatch
                    && <div className="warning-block">Password Dose Not Match</div>
                }
            </div>
            <div className="form-group">
                <InputForm
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="Address"
                    testid="address"
                />
            </div>
            <div className="form-group">
                <InputForm
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={city}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="City"
                    testid="city"
                />
            </div>
            <div className="form-group">
                <InputForm
                    type="text"
                    placeholder="Zip"
                    className="form-control"
                    name="zip"
                    value={zip}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="Zip"
                    testid="zip"
                />
            </div>
            <div className="form-group">
                <InputForm
                    type="text"
                    placeholder="State"
                    className="form-control"
                    name="state"
                    value={state}
                    onChange={onChange}
                    submitted={submitted}
                    requiredField="State"
                    testid="state"
                />
            </div>
            <div className="submit">
                <button className="btn btn-success" data-testid="submit">
                    Sign Up
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </form>
    )
};


export default (SignForm);