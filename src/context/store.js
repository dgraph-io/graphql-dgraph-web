import React  from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {store ,  persistor} from './configure_store';
import { Provider } from 'react-redux';


export const App = (props) => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {props.children}
        </PersistGate>
      </Provider>
    );
  };
