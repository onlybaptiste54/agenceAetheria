import Accueil from './Components/Accueil';
import APropos from './Components/APropos';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Audit from './Components/Audit';
import Footer from './Components/Footer';
import Partenaire from './Components/Partenaire';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Accueil />
      <Audit />
      <Services />
      <Partenaire/>
      <Contact/>

      <Footer />
    </div>
  );
}