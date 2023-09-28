import Calculadora from './Calculadora'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculadora com React',
  description: 'Criado para concluir exercicío EBAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Calculadora/>
      </body>
    </html>
  )
}
