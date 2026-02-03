import Advanced from './components/Advanced';
import Cta from './components/Cta';
import Footer from './components/Footer';
import GetStartedBtn from './components/GetStartedBtn';
import Header from './components/Header';
import Hero from './components/Hero';
import LinkShortenerForm from './components/LinkShortenerForm';

export default function App() {
  return (
    <>
      <Header />

      <main className="bg-[#F2F2F2]">
        <Hero />

        <LinkShortenerForm />

        <Advanced />

        <Cta />

        <Footer />
      </main>
    </>
  );
}
