// import { mount } from 'enzyme';
// import React from 'react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { config } from '../../config';
// import rootReducer from '../../reducers/index';
// import App from '../App';

// it('is does not explode', () => {
//     const renderApp = () => (
//         <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
//             <MemoryRouter initialEntries={['/']} initialIndex={0}>
//                 <App />
//             </MemoryRouter>
//         </Provider>
//     );
//     const wrapper = mount(<PixAppProvider render={renderApp} user={definedUser} config={config} />);
//     expect(wrapper).toBeDefined();
// });
