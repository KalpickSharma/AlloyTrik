import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { TeamMemberCard } from '@/components/ui/team-member-card';

const Founders = () => {
  const founders = [
    {
      name: 'Kalpick Sharma',
      role: 'Founder & CEO',
      avatar: '/1ad91227420340fa8a847657a28393d3.jpg',
      bio: 'On a mission to connect innovation, technology, and collaboration in the Digital era. Leading AlloyTrik with a vision to create a thriving ecosystem where Web3 meets AI, and Design meets Development.',
      skills: ['Leadership', 'Web3', 'Strategy', 'Innovation'],
      social: {
        linkedin: 'https://www.linkedin.com/in/kalpicksharma',
        website: 'mailto:kalpicksharma@gmail.com'
      },
      stats: {
        projects: 24,
        contributions: 150
      }
    },
    {
      name: 'Oshaib Beg',
      role: 'Co-Founder & CSO',
      avatar: '/36d58449-3200-4192-9117-2e27d08e03a6.jpg',
      bio: 'Tech enthusiast and developer advocate. Building the future of collaborative development with cutting-edge technologies and fostering an inclusive community for creators worldwide.',
      skills: ['Development', 'Strategy', 'AI', 'Community'],
      social: {
        linkedin: 'https://www.linkedin.com/in/oshaib-beg-3175b4251/',
        website: 'mailto:oshaibbeg181203@gmail.com'
      },
      stats: {
        projects: 18,
        contributions: 120
      }
    }
  ];

  return (
    <section id="founders" className="py-20 relative overflow-hidden">
      {/* Theme-aware Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--gradient-from)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--gradient-via)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 rounded-full px-6 py-3 mb-8 border border-primary/20 bg-primary/5"
          >
            <span className="text-primary font-medium">Meet Our Founders</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8 leading-tight">
            The Visionaries Behind AlloyTrik
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Two passionate individuals united by a shared vision of creating a collaborative space
            where creators and developers can thrive together.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <TeamMemberCard key={founder.name} member={founder} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card/40 backdrop-blur-md rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Connect with Our Founders?
            </h3>
            <p className="text-muted-foreground mb-6">
              Reach out to discuss collaborations, partnerships, or just to say hello!
            </p>
            <motion.a
              href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 gradient-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              <span>Join Our Community</span>
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;