import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Header } from "./components/Header";
import { TranslationProvider } from "./context/TranslationContext";
import { Management } from "./pages/Management";
import { Public } from "./pages/Public";

function App() {
  return (
    <TranslationProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/management" element={<Management />} />
              <Route path="/" element={<Public />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </TranslationProvider>
  );
}

export default App;
