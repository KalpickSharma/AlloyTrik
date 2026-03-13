import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import FourPillars from '@/components/sections/FourPillars';
import ScrollingShowcase from '@/components/sections/ScrollingShowcase';
import Stats from '@/components/sections/Stats';
import Founders from '@/components/sections/Founders';

export function Home() {
  return (
    <Layout>
      {/* Hero Section - Full screen cinematic */}
      <Hero />

      {/* Stats - Animated counter strip */}
      <Stats />

      {/* About / Community Section */}
      <About />

      {/* Core Pillars / Domains */}
      <FourPillars />

      {/* Projects Showcase */}
      <ScrollingShowcase />

      {/* Founders Section */}
      <Founders />
    </Layout>
  );
}

export default Home;
