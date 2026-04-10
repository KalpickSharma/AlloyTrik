import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Twitter, X } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const members = [
  {
    id: 'f1',
    name: 'Kalpick Sharma',
    role: 'Founder & CEO',
    image: '/1ad91227420340fa8a847657a28393d3.jpg',
    bio: 'On a mission to connect innovation, technology, and collaboration in the Digital era. Leading AlloyTrik with a vision to create a thriving ecosystem where Web3 meets AI, and Design meets Development.',
    skills: ['Leadership', 'Strategy', 'Web3', 'Strategy', 'Innovation', "Design", "Python", "AI", "development"],
    social: {
      linkedin: 'https://www.linkedin.com/in/kalpicksharma',
      email: 'mailto:kalpicksharma@gmail.com',
    },
    color: 'cyan',
    stats: { projects: 24, contributions: 150 },
    type: 'founder'
  },
  {
    id: 'f2',
    name: 'Oshaib Beg',
    role: 'Co-Founder & CSO',
    image: '/36d58449-3200-4192-9117-2e27d08e03a6.jpg',
    bio: 'Tech enthusiast and developer advocate. Building the future of collaborative development with cutting-edge technologies and fostering an inclusive community for creators worldwide.',
    skills: ['Development', 'AI', 'Community', 'blockchain', 'Web3', 'javascript',],
    social: {
      linkedin: 'https://www.linkedin.com/in/oshaib-beg-3175b4251/',
      email: 'mailto:oshaibbeg181203@gmail.com',
    },
    color: 'purple',
    stats: { projects: 18, contributions: 120 },
    type: 'founder'
  },
  {
    id: 't1',
    name: 'Abhishek Sharma',
    role: 'Content Creator',
    image: '/abhishek.jpg',
    color: 'cyan',
    bio: `I’m Abhishek Kumar Sharma a content creator at Alloytrik and an active member of IEEE with a strong involvement in tech communities

I’ve contributed as a volunteer in events like FlutterSphere 25 ICRTICC 25 Delhi NCR Kotlin Conf 24 and The ACE 24 and was part of GSSOC 24

I’m interested in AI and ML and actively engage with communities like GDG GCET GFG GCET and AITIAN I also bring experience from DXC Technology and enjoy building sharing and contributing to impactful tech initiatives from Sitamarhi`,
    social: { linkedin: "https://www.linkedin.com/in/abhishek-kumar-sharma-3b2bb0213/" },
    type: 'core'
  },
  {
    id: 't2',
    name: 'Shreshtha Anand',
    role: 'Content Creator',
    image: '/Shreshtha.webp',
    color: 'purple',
    bio: "I am a third year Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning with a strong interest in emerging technologies. I enjoy learning building and connecting with people who are working on meaningful ideasI actively participate in tech events and community initiatives and like contributing through organizing coordinating or supporting teams to make things run smoothly. I am comfortable handling multiple tasks while staying focused on impact.Areas of interest include AI and ML tech communities events educational outreach and project coordination Open to collaborations volunteering and opportunities where I can contribute to learning innovation and tech for good",
    social: { linkedin: "https://www.linkedin.com/in/shreshtha-anand-30b5ba299/" },
    type: 'core'
  },
  {
    id: 't3',
    name: 'Sakshi Gupta',
    role: 'Content Creator',
    image: '/Sakshi.webp',
    color: 'pink',
    social: { linkedin: "https://www.linkedin.com/in/sakshi-gupta-042390346/" },
    type: 'core'
  },
  {
    id: 't4',
    name: 'Nandani Gupta',
    role: 'Content Creator',
    image: '/Nandani.webp',
    color: 'green',
    bio: `I’m Nandani Gupta a Computer Science Data Science student and tech content creator focused on learning building and helping others grow in tech

I’m currently strengthening my Python and problem solving skills through real world contributions and have participated in open source programs like GSSoC SSOC SWoC OSCI and OSCG where I collaborated with maintainers and improved projects

I’ve also mentored beginners in programs like CodeSocial SWoC and Elite Coders helping them with Git GitHub and their first contributions while supporting project teams

Beyond this I’ve worked as a campus ambassador with communities like GSSoC Lets Upgrade Internshala and ECWoC focusing on outreach and community growth

I share my journey and simplify tech and finance concepts on my platform KashuDebugs

Interested in open source mentorship community building and content creation and open to internships and collaborations`,
    social: { linkedin: "https://www.linkedin.com/in/nandaniiguptaa/" },
    type: 'core'
  },
  {
    id: 't5',
    name: 'Pushkar Tripathi',
    role: 'Public Relations',
    image: '/Pushkar.webp',
    color: 'cyan',
    bio: `I’m a Computer Science Engineering student at GL Bajaj Institute of Technology, Greater Noida,  I am driven by curiosity and fueled by a need to understand not just how things work, but why they exist in the first place.

I find myself at the crossroads of logic and philosophy. While my academic journey revolves around programming, systems, and algorithms, my deeper interests extend into history, geopolitics, and theoretical physics. I believe real innovation happens when you blend technical skills with critical thinking and a strong sense of purpose.

Whether I’m debugging code, breaking down a complex idea, or questioning the status quo, I aim to stay grounded, keep learning, and build things that matter.

Looking to connect with like-minded individuals who believe in depth over noise, clarity over chaos, and action over endless planning.`,
    social: { linkedin: "https://www.linkedin.com/in/pushkar-tripathi-46a02829a/" },
    type: 'core'
  },
  {
    id: 't6',
    name: 'Kashvi Tyagi',
    role: 'Public Relations',
    image: '/Kashvi.webp',
    color: 'purple',
    bio: `I am a pre-final year Computer Science Engineering student with a strong interest in pursuing a career as an AI Engineer. My core technical skills include Python and its libraries as well as Java, which I actively apply to strengthen my problem-solving and programming foundation.

I am particularly interested in the fields of Artificial Intelligence, Machine Learning, and Data-Driven Technologies, and I am committed to continuous learning to expand my technical expertise.

As I progress in my academic and professional journey, my goal is to contribute to innovative projects that leverage AI to solve real-world challenges. I am eager to collaborate, learn from experienced professionals, and take on opportunities that will help me grow into a skilled engineer.`,
    objectPosition: 'object-top',
    social: { linkedin: "https://www.linkedin.com/in/kashvi-361477311/" },
    type: 'core'
  },
  {
    id: 't7',
    name: 'Mukul Mehta',
    role: 'Public Relations',
    image: '/Mukul.jpg',
    color: 'pink',
    bio: `As an Organizer at Google Developer Groups on Campus Gurugram University, I lead initiatives to promote technology adoption, innovation, and peer-to-peer learning. My role involves managing events such as workshops, hackathons, and technical sessions, while mentoring peers in AI, ML, and Cloud technologies. Collaborating with industry professionals and campus leaders, I focus on building a dynamic community that supports skill development and innovation.  

Pursuing a Bachelor of Technology in Computer Science at Gurugram University, I also contribute as a Public Relations Manager at AlloyTrik, where I manage community engagement and partnerships to amplify the organization’s presence. My practical experience, coupled with my proficiency in Python, NumPy, and PyTorch, demonstrates my commitment to empowering students and developers through impactful initiatives that bridge academic learning with industry demands.`,
    social: { linkedin: "https://www.linkedin.com/in/mukul-mehta83/" },
    type: 'core'
  },
  {
    id: 't8',
    name: 'Harsimran Singh',
    role: 'Content Creator',
    image: '/Harsimran.jpg',
    color: 'green',
    bio: `I build production-grade AI systems that replace hours of manual work with multi-agent pipelines that actually ship.

At Fraterny, I architected Quest - a 10-agent LangGraph system that delivers complex psychological analysis in under 2 minutes, automating workflows that previously required hours of specialist review. The same architecture applies directly to FinTech and SaaS: compliance automation, intelligent customer profiling, real-time risk assessment, and document processing at scale.

What I bring:

→ Multi-Agent Orchestration: LangGraph swarm design (orchestrators + analysts + structural agents)

→ RAG & Semantic Search: Hybrid search with fine-tuned embeddings (+25% retrieval accuracy), FAISS, pgvector

→ Backend Engineering: FastAPI async pipelines for concurrent heavy workloads (40% bottleneck reduction)

→ Model Fine-Tuning: Contrastive learning on custom triplet datasets for domain-specific accuracy

→ Infrastructure: GCP deployment, CI/CD pipelines, Linux server management, dual-tier routing

Actively targeting AI Engineer roles in FinTech, SaaS, and product-led tech - remote worldwide (ex-USA) or India-based.

📩 harsimransingh27448@gmail.com | localsyncai.in`,
    social: { linkedin: "https://www.linkedin.com/in/harsimransinghtech/" },
    type: 'core'
  },
  {
    id: 't9',
    name: 'Shanket Kumar',
    role: 'Social Reposter',
    image: '/Sanket.webp',
    color: 'green',
    bio: `SDE Intern — Parliament of India
       Where 1.4 billion voices are represented — I made sure the systems behind them never broke.
 
 ITS Intern — Engineers India Limited
      Built full-stack solutions for an organization that literally keeps the nation's infrastructure running.
 
 Content Strategist — AlloyTrik
      Didn't just write content — built the entire narrative identity of a community from the ground up.
 
Mentor — Social Winter of Code
     Turned first-time contributors into confident open-source engineers. One at a time.
 
Citizen Scientist — NASA
      Most people look up at space. I got to help study it.
 
 Cloud Innovator — Google
      Learned to build at Google's scale. That standard doesn't leave you.
 
Mentor — GirlScript Summer of Code
      Because the best thing you can do with a skill — is make sure someone else has it too.
 
 AI Intern — AICTE
      Applied AI research inside the body that shapes how an entire nation learns technology.
 
Student Partner — Internshala
      Every student I reached had one more shot at the opportunity they deserved.
 
Campus Ambassador — Let's Upgrade
      Walked into classrooms and left communities behind.

If our paths should cross — let's make it count. 📩 contact.shanket@gmail.com`,
    social: { linkedin: "https://www.linkedin.com/in/shanket-kumar-codeex/" },
    type: 'core'
  }
];

const colorMap = {
  cyan: {
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    text: 'text-cyan-400',
    ring: 'ring-cyan-500/30'
  },
  purple: {
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    text: 'text-purple-400',
    ring: 'ring-purple-500/30'
  },
  pink: {
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    text: 'text-pink-400',
    ring: 'ring-pink-500/30'
  },
  green: {
    badge: 'bg-green-500/20 text-green-300 border-green-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]',
    text: 'text-green-400',
    ring: 'ring-green-500/30'
  },
};

const TeamInfo = () => {
  const [selectedId, setSelectedId] = useState(null);

  const founders = members.filter(m => m.type === 'founder');
  const coreTeam = members.filter(m => m.type === 'core');

  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 font-['Space_Grotesk']">
              Our Team
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Meet the passionate individuals driving innovation and building the future at AlloyTrik.
            </p>
          </motion.div>

          {/* Founders Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center font-['Space_Grotesk']">
              Founders
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {founders.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onClick={() => setSelectedId(member.id)}
                  isExpanded={selectedId === member.id}
                />
              ))}
            </div>
          </div>

          {/* Core Team Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center font-['Space_Grotesk']">
              Core Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
              {coreTeam.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onClick={() => setSelectedId(member.id)}
                  isExpanded={selectedId === member.id}
                />
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            >
              <ExpandedCard
                member={members.find(m => m.id === selectedId)}
                onClose={() => setSelectedId(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

const TeamCard = ({ member, onClick, isExpanded }) => {
  const colorConfig = colorMap[member.color] || colorMap['cyan'];

  return (
    <motion.div
      layoutId={`card-${member.id}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`glass-card rounded-2xl p-4 cursor-pointer transition-all duration-300 w-full max-w-sm ${colorConfig.glow} ${isExpanded ? 'opacity-0' : ''}`}
    >
      <motion.div layoutId={`image-${member.id}`} className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${member.objectPosition || 'object-center'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
      </motion.div>
      <motion.div layoutId={`content-${member.id}`} className="text-center">
        <h3 className="text-xl font-bold text-white mb-1 font-['Space_Grotesk']">{member.name}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${colorConfig.badge}`}>
          {member.role}
        </span>
      </motion.div>
    </motion.div>
  );
};

const ExpandedCard = ({ member, onClose }) => {
  const colorConfig = colorMap[member.color] || colorMap['cyan'];

  return (
    <motion.div
      layoutId={`card-${member.id}`}
      className={`glass-card relative overflow-hidden rounded-3xl w-full max-w-3xl bg-[#0a0a0a]/90 flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
      >
        <X size={20} />
      </button>

      <motion.div layoutId={`image-${member.id}`} className="w-full md:w-2/5 aspect-square md:aspect-auto">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover ${member.objectPosition || 'object-center'}`}
        />
      </motion.div>

      <motion.div layoutId={`content-${member.id}`} className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
        <h3 className="text-3xl font-bold text-white mb-2 font-['Space_Grotesk']">{member.name}</h3>
        <p className={`text-sm font-medium ${colorConfig.text} mb-4`}>{member.role}</p>

        {member.bio && (
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {member.bio}
          </p>
        )}

        {member.skills && (
          <div className="flex flex-wrap gap-2 mb-6">
            {member.skills.map((skill) => (
              <span key={skill} className={`px-2 py-1 rounded-md text-[10px] font-medium border ${colorConfig.badge}`}>
                {skill}
              </span>
            ))}
          </div>
        )}

        {member.stats && (
          <div className="flex space-x-6 mb-6 pb-6 border-b border-white/5">
            <div>
              <p className={`text-2xl font-bold ${colorConfig.text}`}>{member.stats.projects}+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className={`text-2xl font-bold ${colorConfig.text}`}>{member.stats.contributions}+</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wider">Contributions</p>
            </div>
          </div>
        )}

        <div className="flex space-x-3 mt-auto pt-4 border-t border-white/5 md:border-t-0 md:pt-0">
          {member.social?.linkedin && (
            <motion.a whileHover={{ scale: 1.1 }} href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 glass-card rounded-xl hover:bg-white/5 transition-colors">
              <Linkedin size={18} className="text-gray-400 hover:text-white" />
            </motion.a>
          )}
          {member.social?.email && (
            <motion.a whileHover={{ scale: 1.1 }} href={member.social.email} className="p-2.5 glass-card rounded-xl hover:bg-white/5 transition-colors">
              <Mail size={18} className="text-gray-400 hover:text-white" />
            </motion.a>
          )}
          {member.social?.twitter && (
            <motion.a whileHover={{ scale: 1.1 }} href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 glass-card rounded-xl hover:bg-white/5 transition-colors">
              <Twitter size={18} className="text-gray-400 hover:text-white" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamInfo;
