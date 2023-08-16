import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';


function ChatBot(){
    const [count, setCount] = useState(0)
    const [isTyping, setIsTyping] = useState(false);
    const API_KEY = "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";
    const systemMessage = 
    { 
        //  Explain things like you're talking to a software professional with 5 years of experience.
        "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
    }
    const [messages, setMessages] = useState([
        {
          message: "Hello! As an AI language model, I'm here to assist you. How can I help you?",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);

    const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };

      async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat
    
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "ChatGPT") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
    
        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,  // The system message DEFINES the logic of our chatGPT
            ...apiMessages // The messages from our chat with ChatGPT
          ]
        }
    
        await fetch("https://api.openai.com/v1/chat/completions", 
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          if (data.choices && data.choices.length > 0) {
            // If data.choices[0] is available, use its content
            setMessages([
              ...chatMessages,
              {
                message: data.choices[0].message.content,
                sender: "ChatGPT",
              },
            ]);
          } else {
            // If data.choices[0] is not available, set "No Data Available"
            setMessages([
              ...chatMessages,
              {
                message: "No Data Available",
                sender: "ChatGPT",
              },
            ]);
          }
          setIsTyping(false);
        });
      }
    

    return (
        <div className='ChatBot'>
            <div style={{ position:"relative", height: "100%", width: "300px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                // console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>            
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>

        </div>
    )
}
export default ChatBot