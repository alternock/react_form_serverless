import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Browser } from "react-router-dom";
//Chakra-UI
import { ChakraProvider } from '@chakra-ui/react'
//App
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Browser>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Browser>
  </React.StrictMode>
)
