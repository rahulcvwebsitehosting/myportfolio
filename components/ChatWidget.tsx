
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { askRahulAI } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: 'Hi. I am Rahul\'s AI agent. Ask me about his projects or contact info.'}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askRahulAI(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      let processedLine = line.trim();
      if (!processedLine) return <div key={i} className="h-2" />;

      // Handle bold text **text**
      const renderBold = (str: string) => str.replace(/\*\*(.*?)\*\*/g, '<strong class="font-black">$1</strong>');

      // Detect list items starting with *, -, or •
      const listMatch = processedLine.match(/^[*•-]\s*(.*)/);
      if (listMatch) {
        return (
          <div key={i} className="flex gap-2 ml-1 my-1 items-start">
            <span className="shrink-0 text-black font-bold">•</span>
            <span dangerouslySetInnerHTML={{ __html: renderBold(listMatch[1]) }} />
          </div>
        );
      }

      return <p key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: renderBold(processedLine) }} />;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#F1F0D1] border-2 border-black w-80 sm:w-96 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-[450px] overflow-hidden">
          <div className="p-4 border-b-2 border-black bg-black text-[#F1F0D1] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="font-display font-black text-xs tracking-widest uppercase">Rahul.AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform">
              <X size={18} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F1F0D1]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] px-4 py-3 border-2 border-black text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-black text-[#F1F0D1] rounded-2xl rounded-tr-none font-bold' 
                    : 'bg-white text-black rounded-2xl rounded-tl-none'
                }`}>
                  {formatText(m.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-black px-4 py-2 rounded-2xl rounded-tl-none">
                  <Loader2 size={16} className="animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t-2 border-black bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Rahul's AI..."
                className="flex-1 bg-transparent border-2 border-black rounded-xl px-3 py-2 text-sm focus:outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-3 bg-black text-[#F1F0D1] rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-black text-[#F1F0D1] rounded-full border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95"
        >
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
