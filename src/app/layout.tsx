import './globals.scss'

export const metadata = {
  title: 'Next Forum',
  description: 'A place for an exchange of views.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='body-forum'>{children}</body>
    </html>
  )
}
