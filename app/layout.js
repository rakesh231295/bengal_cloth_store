import "./component/css/bootstrap.min.css";
import "./component/css/font-awesome.min.css";
import "./component/css/nouislider.min.css";
import "./component/css/slick-theme.css";
import "./component/css/slick.css";
import "./component/css/style.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bengal Cloth Store',
  description: 'All in Store on Same Plateform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
