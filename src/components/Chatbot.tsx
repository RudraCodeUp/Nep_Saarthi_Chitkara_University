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
      text: 'Hello! 👋 I\'m the NEP Saarthi Assistant. I can answer your questions about NEP 2020 and Chitkara University\'s implementation. How can I help you today?',
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
    
    // Reset to initial state when opening chat
    if (!isOpen) {
      setMessages([{
        id: 'welcome',
        text: 'Hello! 👋 I\'m the NEP Saarthi Assistant. I can answer your questions about NEP 2020 and Chitkara University\'s implementation. How can I help you today?',
        isUser: false,
      }]);
      setSuggestedQuestions(chatbotFAQs.slice(0, 3));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const findAnswer = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    // Handle greetings and common interactions
    if (/^(hi|hello|hey|greetings|namaste).*/i.test(lowerQuestion)) {
      return "Hello there! 👋 I'm the NEP Saarthi Assistant. I'm here to help with questions about the National Education Policy 2020 and Chitkara University's implementation. What would you like to know?";
    }
    
    if (/^(how are you|how'?s it going|how do you do).*/i.test(lowerQuestion)) {
      return "I'm functioning well, thank you! I'm here to provide information about NEP 2020 and Chitkara University. What specific information are you looking for?";
    }
    
    if (/^(what can you do|help|how can you help).*/i.test(lowerQuestion)) {
      return "I can provide information about the National Education Policy 2020, its implementation at Chitkara University, key features, benefits for students, academic programs, and more. Feel free to ask specific questions!";
    }
    
    if (/thank.*(you|u)/i.test(lowerQuestion)) {
      return "You're welcome! If you have more questions about NEP 2020 or Chitkara University, feel free to ask anytime.";
    }
    
    // First try exact matches
    const exactMatch = chatbotFAQs.find(
      faq => faq.question.toLowerCase() === lowerQuestion
    );
    
    if (exactMatch) return exactMatch.answer;
    
    // Then try keyword matching - improved version
    const keywords = lowerQuestion.split(/\s+/)
      .filter(word => word.length > 3)
      .filter(word => !['what', 'when', 'where', 'which', 'how', 'does', 'will', 'about', 'that', 'this', 'these', 'those'].includes(word));

    if (keywords.length > 0) {
      // Score each FAQ based on keyword matches with weighted scoring
      const scoredFAQs = chatbotFAQs.map(faq => {
        const faqLower = faq.question.toLowerCase() + ' ' + faq.answer.toLowerCase().substring(0, 100);
        let score = 0;
        
        // Check for exact question matches with high priority
        if (faqLower.includes(lowerQuestion) || lowerQuestion.includes(faqLower.substring(0, 20))) {
          score += 10;
        }
        
        // Check for keyword matches
        keywords.forEach(keyword => {
          // Exact keyword match
          if (faqLower.includes(` ${keyword} `)) {
            score += 2;
          } 
          // Partial keyword match for longer keywords
          else if (keyword.length > 5 && faqLower.includes(keyword)) {
            score += 1;
          }
          
          // Bonus points for keywords in the question part (higher relevance)
          if (faq.question.toLowerCase().includes(keyword)) {
            score += 3;
          }
          
          // Context-specific keyword scoring
          if ((keyword === 'chitkara' || keyword === 'university') && 
              faq.question.toLowerCase().includes('chitkara')) {
            score += 3;
          }
          
          if ((keyword === 'saarthi' || keyword === 'nepsaarthi') && 
              faq.question.toLowerCase().includes('saarthi')) {
            score += 3;
          }
        });
        
        return { faq, score };
      });
      
      // Find the FAQ with the highest score
      const bestMatches = scoredFAQs
        .sort((a, b) => b.score - a.score)
        .slice(0, 3); // Get top 3 matches
    
      // Return if we have a good match (score threshold)
      if (bestMatches[0] && bestMatches[0].score > 3) {
        // Update suggested questions based on similar high-scoring matches
        if (bestMatches.length > 1) {
          const relatedQuestions = bestMatches
            .slice(1)
            .filter(match => match.score > 2)
            .map(match => match.faq);
        
          if (relatedQuestions.length > 0) {
            // Get a mix of related questions and general questions
            const otherQuestions = chatbotFAQs
              .filter(faq => !relatedQuestions.some(rq => rq.id === faq.id))
              .slice(0, 3 - relatedQuestions.length);
            
            setSuggestedQuestions([...relatedQuestions, ...otherQuestions]);
          }
        }
        
        return bestMatches[0].faq.answer;
      }
    }
    
    // NEP-specific fallback for questions without direct matches
    if (lowerQuestion.includes('nep') || lowerQuestion.includes('education') || 
        lowerQuestion.includes('policy') || lowerQuestion.includes('chitkara')) {
      return "That's a good question about the National Education Policy. While I don't have the specific answer, NEP 2020 is a comprehensive framework that aims to transform India's education system with flexible learning, multiple entry-exit options, and a focus on holistic development. Would you like to know about any specific aspect of NEP or its implementation at Chitkara University?";
    }
    
    // Default response
    return "I don't have specific information about that. I'm specialized in answering questions about NEP 2020, Chitkara University's NEP implementation, academic programs, and related topics. Could you please ask something related to these areas?";
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

    // Reset input and update suggested questions based on context
    setInputValue('');
    
    // Change suggested questions based on the user's query
    if (inputValue.toLowerCase().includes('chitkara')) {
      const chitkara_questions = chatbotFAQs
        .filter(faq => faq.question.toLowerCase().includes('chitkara'))
        .slice(0, 3);
      setSuggestedQuestions(chitkara_questions.length ? chitkara_questions : chatbotFAQs.slice(0, 3));
    } 
    else if (inputValue.toLowerCase().includes('nep')) {
      const nep_questions = chatbotFAQs
        .filter(faq => faq.question.toLowerCase().includes('nep') && !faq.question.toLowerCase().includes('chitkara'))
        .slice(0, 3);
      setSuggestedQuestions(nep_questions.length ? nep_questions : chatbotFAQs.slice(0, 3));
    }
    else {
      setSuggestedQuestions(chatbotFAQs.slice(0, 3));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
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