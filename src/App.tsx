import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { InventoryProvider } from "./context/InventoryProvider";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { RoomPage } from "./pages/RoomPage";
import { Victory } from "./pages/Victory";

const App = () => {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/:roomPath" element={<RoomPage />} />
            <Route path="/victory" element={<Victory />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </InventoryProvider>
    </BrowserRouter>
  );
};

export default App;
