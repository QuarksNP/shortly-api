import styles from '.././styles/globals.css'

export const metadata = {
  title: 'Shortly',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body>
                {children}
            </body>
    </html>
  )
}
