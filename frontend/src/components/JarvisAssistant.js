import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, MessageCircle, X } from 'lucide-react';
import { useJarvis } from '../context/JarvisContext';

const JarvisAssistant = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const {
    isListening,
    isSpeaking,
    transcript,
    response,
    isActive,
    startListening,
    stopListening,
    speak,
    getAIResponse,
    toggleJarvis
  } = useJarvis();

  // Add initial greeting to chat when activated
  useEffect(() => {
    if (isActive && chatHistory.length === 0) {
      setChatHistory([
        {
          type: 'jarvis',
          message: 'Good evening, Mr. Stark. JARVIS systems online. How may I assist you today?',
          timestamp: new Date()
        }
      ]);
    } else if (!isActive && chatHistory.length > 0) {
      setChatHistory([]);
    }
  }, [isActive]);

  // Handle voice response
  useEffect(() => {
    if (response && isActive) {
      setChatHistory(prev => [
        ...prev,
        {
          type: 'jarvis',
          message: response,
          timestamp: new Date()
        }
      ]);
    }
  }, [response, isActive]);

  // Handle voice transcript
  useEffect(() => {
    if (transcript && isActive) {
      setChatHistory(prev => [
        ...prev,
        {
          type: 'user',
          message: transcript,
          timestamp: new Date()
        }
      ]);
    }
  }, [transcript, isActive]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || !isActive) return;

    const userMessage = chatInput.trim();
    setChatInput('');

    // Add user message to chat
    setChatHistory(prev => [
      ...prev,
      {
        type: 'user',
        message: userMessage,
        timestamp: new Date()
      }
    ]);

    try {
      // Get AI response (mock for now)
      const aiResponse = await getAIResponse(userMessage);
      
      // Add JARVIS response to chat
      setChatHistory(prev => [
        ...prev,
        {
          type: 'jarvis',
          message: aiResponse,
          timestamp: new Date()
        }
      ]);

      // Speak the response
      speak(aiResponse);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setChatHistory(prev => [
        ...prev,
        {
          type: 'jarvis',
          message: "I'm experiencing some technical difficulties, Mr. Stark. Please try again.",
          timestamp: new Date()
        }
      ]);
    }
  };

  if (!isActive) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleJarvis}
          className="w-16 h-16 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 border-gray-500"
          title="Activate JARVIS"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Main JARVIS Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-500 ${isExpanded ? 'mb-4' : ''}`}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-16 h-16 bg-gradient-to-r from-iron-red to-red-700 hover:from-red-700 hover:to-iron-red rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 border-iron-gold arc-reactor"
            title="JARVIS Assistant"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Expanded Chat Interface */}
      {isExpanded && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <div className="iron-interface bg-bg-primary bg-opacity-95 backdrop-blur-sm rounded-lg border-2 border-iron-gold">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-iron-gold">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-iron-gold rounded-full flex items-center justify-center">
                  <span className="text-bg-primary text-sm font-bold">J</span>
                </div>
                <div>
                  <div className="iron-text text-sm font-semibold">JARVIS</div>
                  <div className="text-xs text-text-muted">Just A Rather Very Intelligent System</div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-text-muted hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat History */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      chat.type === 'user'
                        ? 'bg-iron-red text-white'
                        : 'bg-bg-secondary border border-iron-gold'
                    }`}
                  >
                    <p className={`text-sm ${chat.type === 'jarvis' ? 'iron-text' : ''}`}>
                      {chat.message}
                    </p>
                    <div className="text-xs text-opacity-70 mt-1">
                      {chat.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Voice Controls */}
            <div className="flex items-center justify-center space-x-4 p-4 border-b border-iron-gold">
              <button
                onClick={isListening ? stopListening : startListening}
                disabled={!isActive}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isListening
                    ? 'bg-red-600 animate-pulse'
                    : 'bg-iron-red hover:bg-red-700'
                }`}
                title={isListening ? 'Stop Listening' : 'Start Voice Input'}
              >
                {isListening ? (
                  <Mic className="w-4 h-4 text-white" />
                ) : (
                  <MicOff className="w-4 h-4 text-white" />
                )}
              </button>

              <button
                onClick={() => speak('JARVIS systems operational and ready for commands.')}
                disabled={isSpeaking}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isSpeaking
                    ? 'bg-blue-600 animate-pulse'
                    : 'bg-iron-red hover:bg-red-700'
                }`}
                title="Test Voice Output"
              >
                {isSpeaking ? (
                  <Volume2 className="w-4 h-4 text-white" />
                ) : (
                  <VolumeX className="w-4 h-4 text-white" />
                )}
              </button>

              <div className="text-xs iron-text">
                {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Ready'}
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask JARVIS anything..."
                  className="flex-1 bg-bg-secondary border border-iron-gold rounded px-3 py-2 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-iron-gold"
                  disabled={!isActive}
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || !isActive}
                  className="btn-primary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JarvisAssistant;