import Menu from '@/components/Menu'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salud y Bienestar',
  description: 'Página web que te permite calcular tu composición corporal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row'>
          <Menu/>
          {children}
        </div>
        </body>
    </html>
  )
}
