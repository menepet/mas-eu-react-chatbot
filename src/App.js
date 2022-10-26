import "./App.css";
// import CardWithGreeting from "./CardWithGreeting";
// import FormGreet from "./FormGreet";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import UserProvider from "./providers/user";

function App() {
  return (
    <UserProvider>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" exact element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Routes>
      </main>
    </UserProvider>
  );
}

export default App;
