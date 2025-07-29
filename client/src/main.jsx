import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import RouterProvider from 'react-router-dom'
import router from './routes/router'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
     < RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
