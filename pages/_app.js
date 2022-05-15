import '../styles/globals.css'
// import "../pages/components/aboutmainstyles.css"


function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {}
    console.error = () => {}
    console.debug = () => {}
  }
  
  return <Component {...pageProps} />
}

export default MyApp
