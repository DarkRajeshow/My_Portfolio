import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export const metadata = {
  title: 'Rajesh Adeli',
  description: 'Portfolio Generated using next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>

      <body className={`${montserrat.className} m-auto bg-light w-[100vw] min-h-screen xl:px-32 lg:px-24 md:px-16 px-8 dark:bg-dark`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}