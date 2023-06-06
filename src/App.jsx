import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import {router} from './pages/index.js'
import { store } from './store/store.js'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
        <Analytics />
    </Provider>
  );
}

export default App;
