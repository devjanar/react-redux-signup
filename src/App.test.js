import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render } from '@testing-library/react';
import App from './App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const renderTestedComponent = () => {
  return render(
      <Provider store={store}>
        <App />
      </Provider>
  );
};

describe('test AppComponent components', () => {
  it('should be render the component correctly', () => {
    const { container } = renderTestedComponent();
    expect(container).toBeInTheDocument();
  });
});