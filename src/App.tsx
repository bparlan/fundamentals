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
  Brain,
  ShieldCheck,
  EyeOff,
  MessageSquareWarning,
  GitBranch,
  Network,
  Zap,
  Layers,
  Activity,
  Vault,
  Coins,
  Key
} from 'lucide-react';

const Slide = ({ children, id, className = "" }: { children: ReactNode, id: string, className?: string }) => (
  <section 
    id={id} 
    className={`w-full max-w-[92vw] sm:max-w-xl md:max-w-5xl mx-auto px-4 h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-4 md:px-6 relative overflow-hidden ${className}`}
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
        <div className="max-w-4xl w-full text-center space-y-4 md:space-y-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center mb-4"
          >
            <Terminal className="text-[#dc2626] animate-pulse" size={60} />
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] md:leading-none"
            >
              <span className="text-white">The Architecture</span> <br />
              <span className="text-white">of a</span> <span className="text-[#dc2626]">Free Person</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-s md:text-2xl text-zinc-400 tracking-widest uppercase italic"
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
              Explore the Path
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
          <div className="space-y-4 md:space-y-6 ">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The Foundation</h2>
            <div className="h-1 w-16 md:w-20 bg-[#dc2626]" />
            <p className="text-lg/6 md:text-xl text-zinc-300 font-mono">
              Freedom in the digital age requires mastering the stack.
            </p>
            <p className="text-base/5 md:text-lg text-zinc-400">
              A free person is someone who understands, operates, and owns the digital infrastructure around them. We execute a live deployment of your sovereignty stack, together.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 p-3 md:p-8 border border-zinc-800 space-y-6 md:space-y-8 relative overflow-hidden">
            <Layers className="absolute -bottom-4 -right-4 text-white opacity-5" size={160} />
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-[#dc2626] drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">€90</div>
                <div className="font-mono uppercase tracking-tighter text-xs md:text-sm text-white">
                  Session Price<br />
                  <span className="text-zinc-500">90 Minutes</span>
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-white">3</div>
                <div className="font-mono uppercase tracking-tighter text-xs md:text-sm text-white">
                  Sessions<br />
                  <span className="text-zinc-500">Full Integration</span>
                </div></div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-white">90</div>
                <div className="font-mono uppercase tracking-tighter text-xs md:text-sm text-white">
                  Minutes Each<br />
                  <span className="text-zinc-500">Hands-on Practical Experience</span>
                </div>
              </div>
              
                <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-[#dc2626] drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">€220</div>
                <div className="text-xs md:text-xs font-mono text-white-400 uppercase tracking-tighter">Full Package / %20 Discount <br />
                  <span className="text-zinc-500">90 Minutes X 3 Session</span></div>
                </div>
              
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 3: Module 1 - The Fortress */}
      <Slide id="fortress">
        <div className="max-w-4xl w-full space-y-4 md:space-y-12">
          <div className="flex items-baseline justify-between gap-4">
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-4xl md:text-5xl font-black text-zinc-800">01</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The Fortress</h2>
                <span className="text-3xl md:text-5xl font-black text-[#dc2626] flex-shrink-0 grow text-right">€90</span>
              </div>
              <p className="font-mono text-white bg-[rgb(220,38,38)] text-xl md:text-3xl uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-center">Digital Literacy</p>
              <p className="text-xs md:text-xl text-zinc-300 leading-relaxed font-mono text-center">
              90 Minute | 1-on-1 | Online Session
            </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
            {[
              { icon: Zap, title: "High-Speed Interface", desc: "Master the Search, clipboard management and keyboard shortcuts to eliminate friction and reclaim lost hours." },
              { icon: Shield, title: "The Digital Shield", desc: "Implement hardware-linked multi-factor authentication (2FA) and privacy-focused browsers to secure your digital footprint." },
              { icon: Brain, title: "Second Brain", desc: "Build a sustainable Knowledge Management System (Obsidian/Notion) to structure your data." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-3 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[100px] md:min-h-[180px] transition-colors duration-300"
              >
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#dc2626] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={120} 
                />
                <div className="relative z-10 space-y-1">
                  <h3 className="font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs/4 md:text-sm text-zinc-100 font-mono">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 4: Module 2 - The Engine */}
      <Slide id="engine">
        <div className="max-w-4xl w-full space-y-4 md:space-y-12">
          <div className="flex items-baseline justify-between gap-4">
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-4xl md:text-5xl font-black text-zinc-800">02</div>
                <div className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The Engine</div>
                <div className="text-3xl md:text-5xl font-black text-[#00ff5e] flex-shrink-0 grow text-right">€90</div>
              </div>
              <p className="font-mono text-black bg-[#00ff5e] text-xl md:text-3xl uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-center">AI & Agents</p>
              <p className="text-xs md:text-xl text-zinc-300 leading-relaxed font-mono text-center">
              90 Minute | 1-on-1 | Online Session
            </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
            {[
              { icon: Network, title: "Prompt Architecture", desc: "Master the strict Role, Context, Result, Aim, Limit framework to manage AI as an expert secretary." },
              { icon: GitBranch, title: "Chain-of-Thought", desc: "Force the machine to generate intermediate reasoning steps, drastically reducing logic errors." },
              { icon: MessageSquareWarning, title: "Objection & Critique", desc: "Command the LLM to aggressively challenge your assumptions and expose your strategic blind spots." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-3 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[100px] md:min-h-[140px] transition-colors duration-300"
              >
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#00ff5e] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={100} 
                />
                <div className="relative z-10 space-y-1 md:space-y-2">
                  <h3 className="font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs/4 md:text-sm text-zinc-100 font-mono">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 5: Module 3 - The Vault */}
      <Slide id="vault">
        <div className="max-w-4xl w-full space-y-4 md:space-y-12">
          <div className="flex items-baseline justify-between gap-4">
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-4xl md:text-5xl font-black text-zinc-800">03</div>
                <div className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The Vault</div>
                <div className="text-3xl md:text-5xl font-black text-[#0062ff] flex-shrink-0 grow text-right">€90</div>
              </div>
              <p className="font-mono text-black bg-[#0062ff] text-xl md:text-3xl uppercase tracking-[0.1em] md:tracking-[0.1em] font-bold text-center">Blockchain & Web3</p>
              <p className="text-xs md:text-xl text-zinc-300 leading-relaxed font-mono text-center">
              90 Minute | 1-on-1 | Online Session
            </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
            {[
              { icon: Activity, title: "Inflation Hedging", desc: "Deploy the 50/30/20 budget rule and retirement bucket strategy to build long-term financial resilience." },
              { icon: Vault, title: "Absolute Self-Custody", desc: "Secure your digital assets using non-custodial wallets and navigate to Web3 decentralized networks." },
              { icon: Coins, title: "Core Protocols", desc: "Distinguish between foundational ecosystem assets like Bitcoin and Ethereum." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-3 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[100px] md:min-h-[140px] transition-colors duration-300"
              >
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#0062ff] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={100} 
                />
                <div className="relative z-10 space-y-1 md:space-y-2">
                  <h3 className="font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs/4 md:text-sm text-zinc-100 font-mono">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 6: The Protocol */}
      <Slide id="protocol">
        <div className="max-w-4xl w-full space-y-2 md:space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Read Before <span className="text-[#dc2626]">Booking</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 text-left">
            {[
              {
                icon: ShieldCheck, title: "Referral Access Only", desc: "This masterclass operates strictly within a closed network; Submit your Referrer Name during application. Upon manual approval, your booking details and payment information will be send to your e-mail inbox." },
                { icon: Globe, title: "Mission Discount", desc: "I offer a 20% fee reduction at my discretion for individuals whose creative projects and missions resonate with my values of sharing, open knowledge, and personal autonomy." },
                { icon: Users, title: "+1 Seat Capability", desc: "Sovereignty is best built alongside a trusted partner. Add a second participant to your private, 1-on-1 integration sessions (+€30 for a single module, or +€50 for the €220 Full Package)." }
            ].map((item, i) => (
              <div key={i} className="p-3 md:p-6 border border-zinc-800 hover:border-white bg-zinc-900/20 relative overflow-hidden group flex flex-col justify-center min-h-[100px] transition-colors duration-300">
                <item.icon 
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#dc2626] opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 z-0" 
                  size={100} 
                />
                <div className="relative z-10 space-y-2 md:space-y-2">
                  <h4 className="font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs/4 md:text-sm text-zinc-100 font-mono">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="space-y-4 p-2">
              <a 
                href="https://meet.bparlan.com/index.php/?provider=6&service=2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-2 md:px-12 md:py-6 bg-[#dc2626] text-white font-black text-lg md:text-xl uppercase tracking-[0.2em] hover:bg-black transition-colors shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-black hover:border-white bg-red-800 hover:bg-white hover:text-black relative overflow-hidden group flex flex-col justify-center transition-colors duration-300"
              >
                Apply Now
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs/4 md:text-xs font-mono text-white px-0">
                <span className="text-black bg-white">Requirements:</span>
                <br /> Own computer, quiet space, headset & mic<br />
              </p>
              <div className="flex-wrap justify-center gap-0 text-xs md:text-xs font-mono text-zinc-400">
                <span>Telegram: <a href="http://t.me/bparlan" className="hover:text-white transition-colors">@bparlan</a></span><br />
                Email: <a href="mailto:bparlan@bparlan.com" className="hover:text-white transition-colors">bparlan@bparlan.com</a>
              </div>
            </div>
          </div>

          <footer className="pt-2 md:pt-6 border-t border-zinc-700">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-xs md:text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>Barış Parlan | 2026</span>
            </div>
          </footer>
        </div>
      </Slide>
    </main>
  );
}
