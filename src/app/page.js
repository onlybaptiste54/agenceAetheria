import Accueil from './Components/Accueil';
import CasClients from './Components/CasClients';
import Services from './Components/Services';
import Demo from './Components/Demo';
import Audit from './Components/Audit';
import Reassurance from './Components/Reassurance';
import FAQComponents from './Components/FAQComponents';
import Contact from './Components/Contact';
import Partenaire from './Components/Partenaire';
import Footer from './Components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Accueil />
      <CasClients />
      <Services />
      <Audit />
      <Reassurance />
      <FAQComponents />
      <Footer />
    </div>
  );
}