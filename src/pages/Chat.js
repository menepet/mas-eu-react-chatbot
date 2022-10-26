import ChatBot from "react-simple-chatbot";
import classes from "./Chat.module.css";
import { ThemeProvider } from "styled-components";
import { useLocation } from 'react-router-dom';

//red, green, blue, purple, pink
let botColor; 
let userColor;
let userName = "User";
console.log('name from welcome', )


function assignRandomColorsToTwoPersons() {
  const colors = ['red', 'green', 'blue', 'purple', 'pink'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  botColor = randomColor;
  colors.splice(randomIndex, 1);
  userColor = colors[Math.floor(Math.random() * colors.length)];
}

assignRandomColorsToTwoPersons();

console.log(botColor, userColor);



const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: botColor,
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: botColor,
  botFontColor: "#fff",
  userBubbleColor: userColor,
  userFontColor: "#4a4a4a",
  marginTop: "2rem"
};

const steps = [
  {
    id: "1",
    message: `Hello ${userName}!`,
    end: true,
  },
  {
    id: "2",
    message: `How can I help you today ${userName}?`,
    end: true,
  },
];

const Chat = () => {
  const { state } = useLocation();
  const { data } = state || {};
  console.log({data});

  return (
    <div className={classes.contain}>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </div>
  );
};

export default Chat;
