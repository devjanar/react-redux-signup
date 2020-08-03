import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import axiosMock from 'axios'
import { render, cleanup, waitForElement, fireEvent,screen} from '../../utils/test-utils'
// import { render, cleanup, waitForElement, fireEvent,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import reducer,{ initialState } from '../../reducers/userReducer'
import Form from '../Form'

const user= {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    conFpassword:"",
    address:"",
    city:"",
    zip:"",
    state:"",
};

// function renderWithRedux(ui, { reduxState } = {}) {
//     const store = createStore(reducer, reduxState || initialState);
//     return render(<Provider store={store}>{ui}</Provider>);
// }

afterEach(cleanup);

test("form initial testing",async () => {
    const onClick = jest.fn();
    const {getByTestId } = render(<Form onClick={onClick} />, {
        reduxState: {
            user: user
        }
    });

    fireEvent.change(getByTestId('firstname'), {
        target: {value: user.firstname},
    });
    fireEvent.change(getByTestId('lastname'), {
        target: {value: user.lastname},
    });
    fireEvent.change(getByTestId('email'), {
        target: {value: user.email},
    });
    fireEvent.change(getByTestId('password'), {
        target: {value: user.password},
    });
    fireEvent.change(getByTestId('conFpassword'), {
        target: {value: user.conFpassword},
    });
    fireEvent.change(getByTestId('address'), {
        target: {value: user.address},
    });
    fireEvent.change(getByTestId('city'), {
        target: {value: user.city},
    });
    fireEvent.change(getByTestId('zip'), {
        target: {value: user.zip},
    });
    fireEvent.change(getByTestId('state'), {
        target: {value: user.state},
    });

    expect(getByTestId('firstname')).toHaveTextContent(user.firstname);
    expect(getByTestId('lastname')).toHaveTextContent(user.lastname);
    expect(getByTestId('email')).toHaveTextContent(user.email);
    expect(getByTestId('password')).toHaveTextContent(user.password);
    expect(getByTestId('conFpassword')).toHaveTextContent(user.conFpassword);
    expect(getByTestId('address')).toHaveTextContent(user.address);
    expect(getByTestId('city')).toHaveTextContent(user.city);
    expect(getByTestId('zip')).toHaveTextContent(user.zip);
    expect(getByTestId('state')).toHaveTextContent(user.state);

    fireEvent.click(getByTestId('submit'));
    expect(onClick).toHaveBeenCalledTimes(1);
});