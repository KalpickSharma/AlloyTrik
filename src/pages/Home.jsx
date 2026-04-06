import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import FourPillars from '@/components/sections/FourPillars';
import ScrollingShowcase from '@/components/sections/ScrollingShowcase';
import Stats from '@/components/sections/Stats';
import Founders from '@/components/sections/Founders';
import TeamScroller from '@/components/sections/TeamScroller';

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

      {/* Team Scroller Section */}
      <TeamScroller />
    </Layout>
  );
}

export default Home;
