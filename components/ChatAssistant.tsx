'use client';

import React, { useState } from 'react';
import { Send, Sparkles, MessageSquare, Bot, User, RefreshCw } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const PRESET_QUESTIONS = [
  'How do high school students test water for agricultural runoff?',
  'What native biological indicators reveal chronic particulate smog?',
  'How do microplastics penetrate local aquatic food chains?',
  'What trees are most effective at cooling urban heat islands?'
];

export default function ChatAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `👋 **Welcome to EcoSense AI Scientist Advisor!**

I am your environmental science mentor for **EurekaDev 2026**. I can assist you with:
- Designing field testing protocols (Winkler titration, secchi depth, PM2.5 monitoring)
- Interpreting biological indicators (ephemeroptera, lichens, earthworms)
- Formulating hypothesis testing for science fair symposium presentations
- Translating citizen science data into municipal environmental policy

Select a question below or ask anything about your local ecosystem!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      if (data.success) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', content: 'Apologies, I encountered an error processing your scientific query.' }]);
      }
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Network connectivity error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-slate-900 border border-emerald-800/40 rounded-3xl p-6 shadow-2xl flex flex-col h-[650px] text-xs">
      
      {/* Chat Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-slate-950 shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white">EcoBot Scientist & Policy Mentor</h3>
            <p className="text-[11px] text-emerald-300">
              EurekaDev 2026 Environmental Science Support
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1 text-[11px]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset Chat
        </button>
      </div>

      {/* Preset Question Pills */}
      <div className="py-2.5 flex overflow-x-auto gap-2 border-b border-slate-800 scrollbar-none">
        {PRESET_QUESTIONS.map((q, i) => (
          <button
            key={i}
            onClick={() => sendMessage(q)}
            className="whitespace-nowrap bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-700/40 px-3 py-1.5 rounded-full text-[11px] transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            {q}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.role === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-[85%] leading-relaxed ${
                m.role === 'user'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none shadow-md'
                  : 'bg-slate-800/90 border border-slate-700 text-slate-200 rounded-bl-none shadow-sm whitespace-pre-wrap'
              }`}
            >
              {m.content}
            </div>

            {m.role === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-emerald-400 text-xs py-2">
            <Bot className="w-4 h-4 animate-spin" />
            <span>Consulting environmental toxicology models...</span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="pt-3 border-t border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about water chemistry, bioindicators, or student cleanup protocols..."
          className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold px-4 py-3 rounded-xl shadow-md transition-all disabled:opacity-50 flex items-center gap-1.5"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>

    </div>
  );
}
