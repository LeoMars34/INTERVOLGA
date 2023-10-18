import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { Task1 } from './Pages/Task1';
import { Task2 } from './Pages/Task2';
import { Main } from './Pages/Main';
import { Info } from './Components/Info';

function App() {
    return (
        <div className="App">
            <Router>
                <Info />
                <Routes>
                    <Route path="/" element={<Navigate to="/Main" />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/Task1" element={<Task1 />} />
                    <Route path="/Task2" element={<Task2 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
