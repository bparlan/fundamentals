/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Lock, 
  ArrowDown, 
  Terminal, 
  ChevronRight,
  Monitor,
  Headphones,
  Users,
  ExternalLink,
  Globe,
  Zap,
  Layers,
  Activity,
  Key
} from 'lucide-react';

const Slide = ({ children, id, className = "" }: { children: ReactNode, id: string, className?: string }) => (
  <section 
    id={id} 
    className={`h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-4 md:px-6 relative overflow-hidden ${className}`}
  >
    {children}
  </section>
);

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPos = containerRef.current.scrollTop;
      const height = window.innerHeight;
      const index = Math.round(scrollPos / height);
      setActiveSlide(index);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main 
      ref={containerRef}
      className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-[#000000] text-[#f5f5f5] selection:bg-[#dc2626] selection:text-white"
    >
      {/* Sticky CTA - only visible after first slide */}
      <AnimatePresence>
        {activeSlide > 0 && activeSlide < 5 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => scrollTo('protocol')}
            className="fixed bottom-6 right-6 z-50 bg-[#dc2626] text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 text-sm md:text-base"
          >
            Apply Now <ChevronRight size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide 1: The Hook */}
      <Slide id="hero">
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center mb-2"
          >
            <Terminal className="text-[#dc2626] animate-pulse" size={40} />
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] md:leading-none"
            >
              <span className="text-white">The Architecture</span> <br />
              <span className="text-white">of a</span> <span className="text-[#dc2626]">Free Person</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-sm md:text-2xl text-zinc-400 tracking-widest uppercase italic"
            >
              Master the tools shaping our world.
            </motion.p>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto space-y-6 md:space-y-8"
          >
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed px-4">
              Stop being a digital survivor. In an era of rapid AI emergence and systemic economic shifts, mere digital participation is no longer enough. <span className="text-white font-bold italic">You need sovereignty.</span>
            </p>
            
            <button 
              onClick={() => scrollTo('mandate')}
              className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-sm md:text-base"
            >
              Explore the Stack
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700"
        >
          <ArrowDown size={20} />
        </motion.div>
      </Slide>

      {/* Slide 2: The Foundation */}
      <Slide id="mandate">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">The Foundation</h2>
            <div className="h-1 w-16 md:w-20 bg-[#dc2626]" />
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-mono">
              Freedom in the digital age requires mastering the stack.
            </p>
            <p className="text-base md:text-lg text-zinc-400">
              A free person is someone who understands, operates, and owns the digital infrastructure around them. We execute a live deployment of your sovereignty stack.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 p-6 md:p-8 border border-zinc-800 space-y-6 md:space-y-8 relative overflow-hidden">
            <Layers className="absolute -bottom-4 -right-4 text-white opacity-5" size={160} />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-white">3</div>
                <div className="font-mono uppercase tracking-tighter text-xs md:text-sm text-white">
                  Sessions<br />
                  <span className="text-zinc-500">Intensive Integration</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-white">90</div>
                <div className="font-mono uppercase tracking-tighter text-xs md:text-sm text-white">
                  Minutes Each<br />
                  <span className="text-zinc-500">High-Bandwidth Transfer</span>
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <div className="text-3xl md:text-5xl font-black text-[#dc2626] drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">€200</div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">Fixed Protocol Fee</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 3: Module 1 - The Fortress */}
      <Slide id="fortress" className="bg-[#000000]">
        <div className="max-w-4xl w-full space-y-8 md:space-y-12">
          <div className="flex items-baseline gap-3 md:gap-4">
            <span className="text-4xl md:text-6xl font-black text-zinc-800">01</span>
            <div className="space-y-1">
              <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter">The Fortress</h2>
              <p className="font-mono text-[#dc2626] text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">Digital Literacy / Defense</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Monitor, title: "Efficient Habits", desc: "Optimize your physical and digital interface to reclaim your focus." },
              { icon: Shield, title: "Digital Defense", desc: "Deploy hardware-linked security and robust password management." },
              { icon: Lock, title: "Knowledge Vault", desc: "Sustainable systems to capture and organize your critical information." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-5 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[130px] md:min-h-[180px] transition-colors duration-300"
              >
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#dc2626] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={120} 
                />
                <div className="relative z-10 space-y-2">
                  <h3 className="font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 font-mono leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 4: Module 2 - The Engine */}
      <Slide id="engine">
        <div className="max-w-4xl w-full space-y-8 md:space-y-12">
          <div className="flex items-baseline gap-3 md:gap-4">
            <span className="text-4xl md:text-6xl font-black text-zinc-800">02</span>
            <div className="space-y-1">
              <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter">The Engine</h2>
              <p className="font-mono text-[#22c55e] text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">AI & Automation / Power</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: Zap, title: "Expert Secretary", desc: "Transition from randomly using AI to managing it as a highly skilled assistant." },
              { icon: Activity, title: "Autonomous Workflows", desc: "Master the strict architecture required to build reliable automated systems." },
              { icon: Cpu, title: "Force Multiplier", desc: "Deploy custom agents and automation to amplify your daily output." },
              { icon: Terminal, title: "Cognitive Labor", desc: "Automate high-value mental tasks and build a competitive advantage." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[110px] md:min-h-[140px] transition-colors duration-300"
              >
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#22c55e] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={100} 
                />
                <div className="relative z-10 space-y-1 md:space-y-2">
                  <h3 className="font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</h3>
                  <p className="text-[10px] md:text-sm text-zinc-400 font-mono leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 5: Module 3 - The Vault */}
      <Slide id="vault" className="bg-[#000000]">
        <div className="max-w-4xl w-full space-y-8 md:space-y-12">
          <div className="flex items-baseline gap-3 md:gap-4">
            <span className="text-4xl md:text-6xl font-black text-zinc-800">03</span>
            <div className="space-y-1">
              <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter">The Vault</h2>
              <p className="font-mono text-[#3b82f6] text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">Financial Sovereignty / Assets</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: Key, title: "Self-Custody", desc: "Take full control of your private keys and digital assets." },
              { icon: Activity, title: "Retirement Planning", desc: "Architect long-term strategies against systemic inflation." },
              { icon: Lock, title: "Censorship Resistance", desc: "Operate outside centralized financial choke points." },
              { icon: Shield, title: "Digital Property", desc: "Secure your identity and assets in the digital realm." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[110px] md:min-h-[140px] transition-colors duration-300"
              >
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#3b82f6] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={100} 
                />
                <div className="relative z-10 space-y-1 md:space-y-2">
                  <h3 className="font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</h3>
                  <p className="text-[10px] md:text-sm text-zinc-400 font-mono leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 6: The Protocol */}
      <Slide id="protocol">
        <div className="max-w-4xl w-full space-y-8 md:space-y-12 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Secure Your Future</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
            {[
              { icon: Globe, title: "Format & Access", desc: "Private 1-on-1 Mentorship / Global digital access via secure link." },
              { icon: Headphones, title: "Requirement", desc: "Own computer, quiet environment, headset/mic." }
            ].map((item, i) => (
              <div key={i} className="p-5 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[100px] transition-colors duration-300">
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#dc2626] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={100} 
                />
                <div className="relative z-10 space-y-1">
                  <h4 className="font-bold uppercase text-[10px] md:text-xs tracking-widest text-zinc-500">{item.title}</h4>
                  <p className="text-xs md:text-sm text-zinc-300 font-mono">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <a 
                href="https://meet.bparlan.com/index.php/?provider=6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 md:px-12 md:py-6 bg-[#dc2626] text-white font-black text-lg md:text-xl uppercase tracking-[0.2em] hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.3)]"
              >
                Apply Now
              </a>
              <p className="text-[#dc2626] font-mono text-xs md:text-sm uppercase tracking-widest font-bold">By Referral Only</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] md:text-xs font-mono text-zinc-500 italic px-4">
                Requires manual approval. Payment (Fiat/Crypto) required upon confirmation to lock in slots.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[10px] md:text-xs font-mono text-zinc-400">
                <span>Telegram: @bparlan</span>
                <a href="mailto:bparlan@gmail.com" className="hover:text-white transition-colors">Email: bparlan@gmail.com</a>
              </div>
            </div>
          </div>

          <footer className="pt-8 md:pt-12 border-t border-zinc-900">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>© Barış Parlan 2026</span>
            </div>
          </footer>
        </div>
      </Slide>
    </main>
  );
}
