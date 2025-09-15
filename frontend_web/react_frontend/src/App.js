import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
