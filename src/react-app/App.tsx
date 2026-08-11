import { useReveal } from './hooks/useReveal';
import { useCounters } from './hooks/useCounters';
import { useCustomCursor } from './hooks/useCustomCursor';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhyMyRide } from './components/WhyMyRide';
import { Proof } from './components/Proof';
import { AppSection } from './components/AppSection';
import { Footer } from './components/Footer';
import { CityProvider } from './contexts/CityContext';
import { LocaleProvider } from './contexts/LocaleContext';

export default function App() {
  useReveal();
  useCounters();
  useCustomCursor();

  return (
    <LocaleProvider>
      <CityProvider>
        <div id="cursor" className="cursor" aria-hidden="true" />
        <Nav />
        <Hero />
        <HowItWorks />
        <WhyMyRide />
        <Proof />
        <AppSection />
        <Footer />
      </CityProvider>
    </LocaleProvider>
  );
}
