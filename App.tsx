import React, { useState, useEffect } from 'react';
import { 
  Globe, Menu, ArrowRight, Zap, CheckCircle, 
  ChevronRight, Cpu, Link as LinkIcon, X
} from 'lucide-react';
import { content } from './data';
import { Language } from './types';

// --- Components ---

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer flex items-center gap-1">
            <span>logeek</span>
            <span className="text-blue-600">.ai</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">{t.product}</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">{t.technology}</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">{t.pricing}</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">{t.cases}</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-black px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Globe className="w-4 h-4 mr-1.5" />
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <button className="hidden md:block bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg">
            {t.contact}
          </button>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden p-6 flex flex-col gap-4 animate-fade-in-up">
            <a href="#" className="text-lg font-medium text-gray-800">{t.product}</a>
            <a href="#" className="text-lg font-medium text-gray-800">{t.technology}</a>
            <a href="#" className="text-lg font-medium text-gray-800">{t.pricing}</a>
            <a href="#" className="text-lg font-medium text-gray-800">{t.cases}</a>
            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl text-base font-medium w-full mt-2">
              {t.contact}
            </button>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang].hero;
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-8 border border-blue-100 hover:bg-blue-100 transition-colors cursor-default">
              {t.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6 whitespace-pre-line">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center group">
                {t.cta_primary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-gray-600 px-6 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-all flex items-center">
                {t.cta_secondary}
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>RaaS Model</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>200+ Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Demo */}
          <div className="relative animate-fade-in-up delay-200">
            {/* Abstract Background Shapes */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob animation-delay-2000"></div>

            {/* The Chat/Agent Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
              <div className="bg-gray-50/80 backdrop-blur px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-mono text-gray-400">LIVE AGENT SESSION</div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* User Bubble */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-sm font-bold text-gray-500">
                    {t.demo.user_avatar[0]}
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none px-5 py-3 text-gray-800 text-sm leading-relaxed max-w-[90%]">
                    {t.demo.user_text}
                  </div>
                </div>

                {/* Agent Thinking Visual */}
                <div className="flex gap-4 relative">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200 z-10 ring-4 ring-white">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Connection Line */}
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-100 -z-0"></div>

                  <div className="flex-1 space-y-3 pt-1">
                    {/* Chain of Thought Card */}
                    <div className="border border-blue-100 bg-blue-50/30 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        <Cpu className="w-3 h-3" /> Processing...
                      </div>
                      
                      {t.demo.process_steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 animate-pulse-subtle" style={{animationDelay: `${idx * 0.8}s`}}>
                          <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                            step.type === 'action' ? 'bg-orange-100 text-orange-600' : 
                            step.type === 'check' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                            {step.type === 'action' ? <LinkIcon className="w-2.5 h-2.5" /> : 
                             step.type === 'check' ? <CheckCircle className="w-2.5 h-2.5" /> : 
                             <Cpu className="w-2.5 h-2.5" />}
                          </div>
                          <span className="text-xs font-mono text-gray-600">{step.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Final Response */}
                    <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-none px-5 py-3 text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                      {t.demo.final_reply}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparisonSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang].comparison;
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 opacity-75 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" /> {t.traditional.title}
            </h3>
            <ul className="space-y-4">
              {t.traditional.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Logeek */}
          <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 shadow-xl shadow-blue-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-bl-full -mr-8 -mt-8"></div>
            <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2 relative z-10">
              <CheckCircle className="w-6 h-6" /> {t.logeek.title}
            </h3>
            <ul className="space-y-4 relative z-10">
              {t.logeek.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-900 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentMatrix: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang].matrix;
  return (
    <div className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.agents.map((agent, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${agent.color}`}>
                {agent.icon}
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{agent.focus}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{agent.role}</h3>
              <p className="text-gray-600 leading-relaxed">
                {agent.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechnologyBento: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang].bento;
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.cards.map((card, i) => (
            <div key={i} className={`${card.col} ${card.bg} rounded-3xl p-8 relative overflow-hidden group min-h-[240px] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300 hover:shadow-lg`}>
              {/* Decor */}
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                {card.icon && React.cloneElement(card.icon as React.ReactElement, { className: "w-32 h-32" })}
              </div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm ${card.bg.includes('white') ? 'bg-white/10' : 'bg-gray-200'}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className={`text-lg leading-relaxed ${card.bg.includes('white') ? 'text-gray-300' : 'text-gray-500'}`}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomerStories: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang].cases;
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16">{t.title}</h2>
        
        <div className="space-y-8">
          {t.list.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-12 items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="flex-1">
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  {item.tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {item.desc}
                </p>
                <div className="flex items-center text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                  {lang === 'zh' ? '阅读完整案例' : 'Read Case Study'} 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="w-full md:w-64 h-64 bg-blue-50 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-blue-100 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
                <div className="text-5xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{item.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang].footer;
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-gray-800 pb-16">
          <div className="max-w-md">
            <div className="text-2xl font-bold tracking-tight text-white mb-6">
              logeek<span className="text-blue-500">.ai</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t.slogan}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-gray-400">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider">Product</h4>
              <a href="#" className="block hover:text-white transition-colors">Digital Butler</a>
              <a href="#" className="block hover:text-white transition-colors">Digital Manager</a>
              <a href="#" className="block hover:text-white transition-colors">RaaS Pricing</a>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider">Company</h4>
              <a href="#" className="block hover:text-white transition-colors">About Us</a>
              <a href="#" className="block hover:text-white transition-colors">Careers</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider">Contact</h4>
              <a href="#" className="block hover:text-white transition-colors">support@logeek.ai</a>
              <a href="#" className="block hover:text-white transition-colors">Sales: 400-0027-018</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>{t.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <ComparisonSection lang={lang} />
        <AgentMatrix lang={lang} />
        <TechnologyBento lang={lang} />
        <CustomerStories lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;