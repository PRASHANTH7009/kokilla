import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <button onClick={handleClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <ReactQueryDevtools position="bottom-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
