import "./styles/global.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ActivePage from "./pages/ActivePage";
import ArchivedPage from "./pages/ArchivedPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<ActivePage />} />
                    <Route path="/arsip" element={<ArchivedPage />} />
                    <Route path="/tambah-catatan" element={<AddNotePage />} />
                    <Route path="/note/:id" element={<NoteDetailPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
