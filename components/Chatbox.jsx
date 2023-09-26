"use client"
import { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Text,
  Select,
} from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const chatContainerRef = useRef(null);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseChatbox = () => {
    setIsOpen(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newChatMessage = {
      id: messages.length + 1,
      content: newMessage.trim(),
      sender: 'user',
    };

    setMessages([...messages, newChatMessage]);
    setNewMessage('');
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="999"
      >
        <IconButton
          icon={isOpen ? <CloseIcon /> : <ChatIcon />}
          aria-label="Open Chatbox"
          onClick={toggleChatbox}
          colorScheme={isOpen ? 'red.500' : 'blue.500'}
          size="xxl"
          borderRadius="full"
        />
      </Box>
      {isOpen && (
        <Box
          position="fixed"
          bottom="80px"
          right="20px"
          width="300px"
          minHeight="400px"
          maxHeight="calc(100vh - 120px)"
          boxShadow="lg"
          borderRadius="xl"
          p={0}
          zIndex="9999"
          display="flex"
          flexDirection="column"
          bg="white"
          backgroundImage="url('https://www.transparenttextures.com/patterns/cubes.png')"
          color="black"
        >
          <Box bg="teal" color="white" py={4} px={8} borderRadius="md" mb={4}>
            <Heading as="h1" size="lg" mb={2} py={2}>
              Welcome To DERM-ID
            </Heading>
            <Text fontSize="md" py={2}>
              You have any questions? We are ready to help you.
            </Text>
          </Box>

          <Box
            ref={chatContainerRef}
            flex="1"
            overflowY="scroll"
            px={4}
            pb={4}
          >
            {messages.map((message) => (
              <Box
                key={message.id}
                textAlign={message.sender === 'user' ? 'right' : 'left'}
                mb={2}
              >
                <Box
                  bg={message.sender === 'user' ? 'blue.500' : 'gray.200'}
                  p={4}
                  mb={2}
                  borderRadius="md"
                  color={message.sender === 'user' ? 'white' : 'black'}
                  maxW="75%"
                >
                  {message.content}
                </Box>
              </Box>
            ))}
            <div ref={chatContainerRef}></div>
          </Box>

          <InputGroup mt={2} mb={4} px={4}>
            <Input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              borderRadius="xl"
              height="50px"
              bg="white"
            />
            <InputRightElement width="80px">
              <Box display="flex" alignItems="center" justifyContent="space-between" pr={2} pl={2} pt={1} pb={1}>
                <span
                  style={{
                    cursor: 'pointer',
                    margin: '4px',
                    marginTop: "8px",
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/000000/microphone.png"
                    alt="mic"
                    width="100%"
                    height="100%"
                    style={{ filter: 'brightness(1)' }}
                    onClick={() => {}}
                  />
                </span>
                <span
                  style={{
                    cursor: 'pointer',
                    margin: '4px',
                    marginTop: "8px",
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                  }}
                >
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/speaker.png"
                    alt="speaker"
                    width="100%"
                    height="100%"
                    style={{ filter: 'brightness(1)' }}
                    onClick={() => {}}
                  />
                </span>
                <span
                  style={{
                    cursor: 'pointer',
                    margin: '4px',
                    marginRight: "30px",
                    marginTop: "8px",
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img
                    src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-send-user-interface-kmg-design-flat-kmg-design.png"
                    alt="send"
                    width="100%"
                    height="100%"
                    style={{ filter: 'brightness(1)' }}
                    onClick={handleSendMessage}
                  />
                </span>
              </Box>
            </InputRightElement>
          </InputGroup>

          <Box mt={2} justifyContent="center" mb={0} bg="gray.200" width="350px">
            <Select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              colorScheme="blue"
              size="sm"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </Select>
          </Box>

          <footer>
            <Box
              bg="gray.300"
              py={2}
              px={0}
              display="flex"
              justifyContent="center"
              bottom={0}
              width="100%"
            >
              <Text fontSize="sm">Powered by DERM-ID</Text>
            </Box>
          </footer>
        </Box>
      )}
    </>
  );
};

export default Chatbox;
