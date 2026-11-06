import React, { createContext, useContext, useState, useCallback } from 'react';
import { jarvisResponses } from '../mockData';

const JarvisContext = createContext();

export const useJarvis = () => {
  const context = useContext(JarvisContext);
  if (!context) {
    throw new Error('useJarvis must be used within a JarvisProvider');
  }
  return context;
};

// Keyword banks — order matters: first match wins.
const RULES = [
  { bank: 'greeting', keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening'] },
  { bank: 'contact', keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'linkedin', 'github'] },
  { bank: 'education', keywords: ['education', 'college', 'degree', 'cgpa', 'diploma', 'study', 'bachelor', 'om engineering'] },
  { bank: 'certifications', keywords: ['certification', 'certificate', 'course'] },
  { bank: 'ygwebstudio', keywords: ['yg web', 'studio', 'freelance', 'client'] },
  { bank: 'experience', keywords: ['experience', 'work history', 'job', 'career', 'capitoline', 'intern', 'company'] },
  { bank: 'wpf', keywords: ['wpf', 'desktop', 'windows app'] },
  { bank: 'dotnet', keywords: ['.net', 'dotnet', 'c#', 'asp.net', 'sql', 'blazor', 'entity framework', 'linq'] },
  { bank: 'azure', keywords: ['azure', 'cloud', 'devops', 'docker', 'ci/cd', 'deploy'] },
  { bank: 'ai', keywords: ['ai', 'artificial intelligence', 'openai', 'machine learning', 'nutriscan', 'ocr'] },
  { bank: 'react', keywords: ['react', 'next.js', 'nextjs', 'frontend', 'angular'] },
  { bank: 'projects', keywords: ['project', 'komal', 'madhukunj', 'jay-ganesh', 'hackathon', 'portfolio', 'built'] },
  { bank: 'skills', keywords: ['skill', 'tech stack', 'technology', 'stack', 'tool'] },
  { bank: 'about', keywords: ['who', 'about', 'yash', 'stark', 'gohel'] },
];

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const pick = (bank) => bank[Math.floor(Math.random() * bank.length)];

const matchResponse = (text) => {
  const lower = text.toLowerCase();
  for (const rule of RULES) {
    const matched = rule.keywords.some((keyword) => {
      const trailing = /[\w]$/.test(keyword) ? '\\b' : '';
      const pattern = new RegExp(`\\b${escapeRegex(keyword)}${trailing}`, 'i');
      return pattern.test(lower);
    });
    if (matched) {
      return pick(jarvisResponses[rule.bank]);
    }
  }
  return pick(jarvisResponses.fallback);
};

const JarvisProvider = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isActive, setIsActive] = useState(false);

  const startListening = useCallback(() => {
    if (!isListening) {
      setIsListening(true);
      setTranscript('');

      setTimeout(() => {
        const mockTranscripts = [
          'Tell me about your experience',
          'What are your strongest .NET skills?',
          'Show me your projects',
          'Who is Yash Gohel?',
          'How can I contact you?',
          'What is NutriScan AI?'
        ];
        const randomTranscript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
        setTranscript(randomTranscript);
        setIsListening(false);
        const reply = matchResponse(randomTranscript);
        setResponse(reply);
        speak(reply);
      }, 2000);
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    setIsListening(false);
  }, []);

  const speak = useCallback((text) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 0.8;
      utterance.volume = 0.8;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
    }
  }, []);

  const handleVoiceCommand = useCallback((command) => {
    const reply = matchResponse(command);
    setResponse(reply);
    speak(reply);
  }, [speak]);

  const getAIResponse = useCallback(async (question) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return matchResponse(question);
  }, []);

  const toggleJarvis = useCallback(() => {
    setIsActive((prev) => {
      const next = !prev;
      speak(
        next
          ? 'JARVIS systems online. Ask me anything about Yash Gohel — experience, skills, projects, or contact details.'
          : 'JARVIS going offline.'
      );
      return next;
    });
  }, [speak]);

  const value = {
    isListening,
    isSpeaking,
    transcript,
    response,
    isActive,
    startListening,
    stopListening,
    speak,
    handleVoiceCommand,
    getAIResponse,
    toggleJarvis,
  };

  return <JarvisContext.Provider value={value}>{children}</JarvisContext.Provider>;
};

export default JarvisProvider;
