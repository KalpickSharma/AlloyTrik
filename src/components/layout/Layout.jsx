import Header from './Header';
import Footer from './Footer';
import Background3D from '../canvas/Background3D';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#030014] text-foreground overflow-x-hidden relative">
      {/* 3D Particle Background */}
      <Background3D />

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-30" />

      {/* Scanning Line Effect */}
      <div className="scanning-line" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
