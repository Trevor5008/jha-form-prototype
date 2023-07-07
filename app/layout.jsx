"use client"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@emotion/react"
import { theme } from "@/styles/themes"
import CssBaseline from "@mui/material/CssBaseline"
import { Provider } from "react-redux"
import store from "./store"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            <title>JHA</title>
         </head>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <CssBaseline />
               <body className={inter.className}>
                  {children}
               </body>
            </ThemeProvider>
         </Provider>
      </html>
   )
}
