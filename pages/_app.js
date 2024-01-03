import  { Metadata } from "next";
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Transition from '../components/Transition';
import { motion } from "framer-motion";


export const metadata = {
  title: "N.N Ambition",
  description: "EVERYONE AND THEIR AMBITION",
};
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        <Transition/>
    <Component {...pageProps} />
    </motion.div>
   
    </AnimatePresence>
  </Layout>)
}

export default MyApp;
