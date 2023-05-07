"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@mui/material"
import { theme } from "@/styles/themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
   title: "JHA",
   description: "Job Hazard Analysis Form"
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <ThemeProvider theme={theme}>
            <body className={inter.className}>
               {children}
            </body>
         </ThemeProvider>
      </html>
   )
}
