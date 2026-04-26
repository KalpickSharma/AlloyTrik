import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import FourPillars from '@/components/sections/FourPillars';
import ScrollingShowcase from '@/components/sections/ScrollingShowcase';
import Stats from '@/components/sections/Stats';
import Founders from '@/components/sections/Founders';
import TeamScroller from '@/components/sections/TeamScroller';
import StreeLabs from '@/components/sections/StreeLabs';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

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

      {/* Stree Labs Section */}
      <StreeLabs />
    </Layout>
  );
}

export default Home;
