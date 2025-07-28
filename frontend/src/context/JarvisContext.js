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

const JarvisProvider = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isActive, setIsActive] = useState(false);

  // Speech Recognition (Mock implementation for now)
  const startListening = useCallback(() => {
    if (!isListening) {
      setIsListening(true);
      setTranscript('');
      
      // Mock: Simulate speech recognition
      setTimeout(() => {
        const mockTranscripts = [
          "Tell me about your skills",
          "Show me your projects", 
          "What's your experience?",
          "Tell me about Tony Stark",
          "How can I contact you?"
        ];
        const randomTranscript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
        setTranscript(randomTranscript);
        setIsListening(false);
        handleVoiceCommand(randomTranscript);
      }, 2000);
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    setIsListening(false);
  }, []);

  // Text-to-Speech
  const speak = useCallback((text) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 0.8;
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
      };
      
      speechSynthesis.speak(utterance);
    }
  }, []);

  // Handle voice commands
  const handleVoiceCommand = useCallback((command) => {
    const lowerCommand = command.toLowerCase();
    let responseText = '';

    if (lowerCommand.includes('skill') || lowerCommand.includes('technology')) {
      responseText = jarvisResponses.skills[Math.floor(Math.random() * jarvisResponses.skills.length)];
    } else if (lowerCommand.includes('project')) {
      responseText = jarvisResponses.projects[Math.floor(Math.random() * jarvisResponses.projects.length)];
    } else if (lowerCommand.includes('about') || lowerCommand.includes('tony') || lowerCommand.includes('stark')) {
      responseText = jarvisResponses.about[Math.floor(Math.random() * jarvisResponses.about.length)];
    } else if (lowerCommand.includes('hello') || lowerCommand.includes('hi') || lowerCommand.includes('hey')) {
      responseText = jarvisResponses.greeting[Math.floor(Math.random() * jarvisResponses.greeting.length)];
    } else {
      responseText = "I'm processing your request, Mr. Stark. Let me analyze the available data in your workshop.";
    }

    setResponse(responseText);
    speak(responseText);
  }, [speak]);

  // Mock AI response (will be replaced with real AI integration later)
  const getAIResponse = useCallback(async (question) => {
    // Mock delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockResponses = [
      "Based on the data in Mr. Stark's workshop, I can tell you that his expertise in full-stack development rivals your engineering prowess with the Iron Man suits.",
      "Analyzing Mr. Stark's portfolio data... His projects demonstrate the same innovative spirit you bring to your technology ventures.",
      "The SimpleTix platform shows remarkable engineering - it's like the Mark 50 of ticketing systems, adaptive and highly responsive.",
      "Mr. Stark's approach to problem-solving mirrors your own - turning complex challenges into elegant solutions."
    ];
    
    return mockResponses[Math.floor(Math.random() * mockResponses.length)];
  }, []);

  const toggleJarvis = useCallback(() => {
    setIsActive(!isActive);
    if (!isActive) {
      speak("JARVIS systems online. How may I assist you, Mr. Stark?");
    } else {
      speak("JARVIS going offline.");
    }
  }, [isActive, speak]);

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
    toggleJarvis
  };

  return (
    <JarvisContext.Provider value={value}>
      {children}
    </JarvisContext.Provider>
  );
};

export default JarvisProvider;