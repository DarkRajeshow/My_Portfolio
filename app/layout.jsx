import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Header from '@/components/shared/Header'

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

      <body className={`${montserrat.className} m-auto bg-light w-[100vw] min-h-screenpx-8 dark:bg-dark`} >
        <Header />
        <div className='xl:px-32 lg:px-24 md:px-16 '>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}