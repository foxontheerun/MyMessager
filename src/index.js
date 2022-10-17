import store from "./Redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});


reportWebVitals();
