import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ScrollingShowcase from '@/components/sections/ScrollingShowcase';
import FourPillars from '@/components/sections/FourPillars';
import About from '@/components/sections/About';
import Founders from '@/components/sections/Founders';

export function Home() {
    return (
        <Layout>
            <div className="pt-20">
                {/* Hero Section */}
                <Hero />

                {/* Scrolling Showcase */}
                <ScrollingShowcase />

                {/* Four Pillars */}
                <FourPillars />

                {/* About/Community Section */}
                <About />

                {/* Founders Section */}
                <Founders />
            </div>
        </Layout>
    );
}

export default Home;
