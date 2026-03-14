import "./App.css";
import NavBar from "./components/NavBar";
import Watchlist from "./features/watchlist/Watchlist";
import Home from "./features/home/Home";
import { Routes, Route } from "react-router-dom";
import WatchListContextWrapper from "./context/WatchListContextWrapper";

function App() {
    return (
        <>
            <NavBar />
            <WatchListContextWrapper> {/* Using usecontext for watchlist */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/watchlist" element={<Watchlist />}></Route>
                </Routes>
            </WatchListContextWrapper>
        </>
    );
}

export default App;
