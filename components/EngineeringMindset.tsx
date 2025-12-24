
import React from 'react';
import { ShieldCheck, Workflow, BarChart3, Binary } from 'lucide-react';

const EngineeringMindset: React.FC = () => {
  const steps = [
    { icon: <ShieldCheck className="text-cyan-400" />, title: 'Analysis', desc: 'Understanding the core constraints and problem space deeply.' },
    { icon: <Workflow className="text-emerald-400" />, title: 'Architecture', desc: 'Designing scalable systems, not just visual skins.' },
    { icon: <Binary className="text-blue-400" />, title: 'Implementation', desc: 'Writing clean, high-performance, and maintainable code.' },
    { icon: <BarChart3 className="text-purple-400" />, title: 'Optimization', desc: 'Measuring metrics and refining for maximum real-world impact.' }
  ];

  return (
    <section id="mindset" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-500 font-mono font-bold text-sm tracking-widest uppercase mb-4 block">Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              I don’t just design screens. <br />
              <span className="text-slate-500 italic">I engineer solutions.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Every project is an optimization problem. My approach combines design maturity with technical depth to ensure that what we build doesn't just look great—it scales, performs, and solves real problems.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">{step.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-900 rounded-3xl border border-slate-800 p-8 overflow-hidden flex items-center justify-center">
              {/* Abstract Mindset Illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 border-[1px] border-slate-800 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border-[1px] border-slate-800 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-16 border-[1px] border-cyan-500/20 rounded-full" />
                
                <div className="z-10 text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <div className="font-mono text-cyan-500 text-xs tracking-widest">SYSTEM DESIGNED</div>
                </div>

                <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
                <div className="absolute bottom-1/4 right-0 w-24 h-px bg-gradient-to-l from-transparent to-emerald-500/50" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-xs font-mono text-slate-400 mb-2">// Performance</p>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-cyan-400" />
              </div>
              <p className="text-xs text-right mt-1 font-bold">98.4ms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringMindset;
