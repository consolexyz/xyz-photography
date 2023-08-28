import '@/styles/globals.scss'
import localFont from "next/font/local"


const bigilla = localFont({
  src : [
    {
      path : '../assets/fonts/bigilla/Bigilla-Bold.otf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/bigilla/Bigilla.otf',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--font-bigilla',
})



export default function App({ Component, pageProps }) {
  return (
    <main className={bigilla.className}>
       <Component {...pageProps} />
    </main>
  )
 
}
 