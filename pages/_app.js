import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Transition from '../components/Transition';
import { motion } from "framer-motion";
import Script from "next/script";


export const metadata = {
  title: "N.N Ambition",
  description: "EVERYONE AND THEIR AMBITION",
};
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
          <Script src="https://cdn.enable.co.il/licenses/enable-L17888rpjyz85bw0-0223-53914/init.js"></Script>

    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        <Transition/>
    <Component {...pageProps} />
    </motion.div>
   
    </AnimatePresence>
  </Layout>
  )
}

export default MyApp;
