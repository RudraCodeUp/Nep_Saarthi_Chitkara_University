import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronUp } from 'lucide-react';
import { chatbotFAQs } from '@/data/chatbotData';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: 'Hello! I\'m the NEP Saarthi assistant. How can I help you today?',
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState(chatbotFAQs.slice(0, 3));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const findAnswer = (question: string) => {
    // Simple matching - can be improved with more sophisticated matching
    const lowerQuestion = question.toLowerCase();
    
    // First try exact matches
    const exactMatch = chatbotFAQs.find(
      faq => faq.question.toLowerCase() === lowerQuestion
    );
    
    if (exactMatch) return exactMatch.answer;
    
    // Then try keyword matching
    const matchedFAQ = chatbotFAQs.find(faq => 
      lowerQuestion.includes(faq.question.toLowerCase().slice(0, 10)) || 
      faq.question.toLowerCase().includes(lowerQuestion.slice(0, 10))
    );
    
    if (matchedFAQ) return matchedFAQ.answer;
    
    // Default response
    return "I don't have specific information about that. Please ask another question about NEP 2020, Chitkara University, or NEP Saarthi.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      isUser: true,
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Generate response
    const botResponse = findAnswer(inputValue);
    
    // Add bot response with slight delay for natural feel
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botResponse,
        isUser: false,
      };
      setMessages(prev => [...prev, botMessage]);
    }, 600);

    // Reset input and suggested questions
    setInputValue('');
    setSuggestedQuestions(chatbotFAQs.slice(0, 3)); // Reset suggested questions
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    // Remove this line to prevent setting the input value
    // setInputValue(question);
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: question,
      isUser: true,
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Find the FAQ that matches this question
    const matchingFAQ = chatbotFAQs.find(faq => faq.question === question);
    
    // Add bot response with slight delay
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: matchingFAQ ? matchingFAQ.answer : "I don't have information about that.",
        isUser: false,
      };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
    
    // Update suggested questions (rotate them)
    const remainingFAQs = chatbotFAQs.filter(faq => faq.question !== question);
    setSuggestedQuestions(remainingFAQs.slice(0, 3));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="bg-nep-orange text-white rounded-full p-3 shadow-lg hover:bg-nep-orange-dark transition-all duration-300 flex items-center"
      >
        {isOpen ? <X size={24} /> : (
          <>
            <MessageCircle size={24} />
            <span className="ml-2 font-medium">Ask NEP Saarthi</span>
          </>
        )}
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border overflow-hidden flex flex-col transition-all duration-300 max-h-[500px]">
          {/* Chat Header */}
          <div className="bg-nep-orange text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-medium">NEP Saarthi Assistant</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto max-h-[320px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${
                  message.isUser ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg max-w-[80%] ${
                    message.isUser
                      ? 'bg-nep-blue text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-3 pb-2">
            <p className="text-xs text-gray-500 mb-1">Suggested questions:</p>
            <div className="flex flex-wrap gap-1">
              {suggestedQuestions.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleSuggestedQuestion(faq.question)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 mb-1 text-gray-700 transition-colors"
                >
                  {faq.question.length > 30 ? `${faq.question.substring(0, 30)}...` : faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t p-2 flex items-center">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-nep-blue"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSendMessage}
              className="bg-nep-orange text-white px-3 py-2 rounded-r-lg hover:bg-nep-orange-dark"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;