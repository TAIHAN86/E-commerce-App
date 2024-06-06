"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux'
import store from '../../store'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
