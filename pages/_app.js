import Layout from '../components/layout'
import '../styles/globals.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'semantic-ui-css/semantic.min.css'



function MyApp({ Component, pageProps }) {
  return <Layout>
     
    <Component {...pageProps} /></Layout>
}

export default MyApp
