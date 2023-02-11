import React from 'react';
import {
   QueryClient,
   QueryClientProvider,
 } from '@tanstack/react-query';
import { Basic } from './basic';
import './App.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Basic />
    </QueryClientProvider>
        </React.StrictMode>
      </>
  )
}