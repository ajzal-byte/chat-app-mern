import "./App.css";
import { Home, Login, SignUp } from "./pages";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  );
};

export default App;
