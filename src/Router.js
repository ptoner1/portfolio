import { Route, Routes, useNavigate } from "react-router-dom"
import App from './App';
import ScrollPainting from './bonus-content/scroll-painting/ScrollPainting';

export default function Router() {

    const navigate = useNavigate();
    return (
        <Routes>
            <Route exact path='/'
                element={<App
                    navigate={navigate}
                />} />
            <Route exact path='/scrollpainting'
                element={<ScrollPainting
                    navigate={navigate}
                />} />
        </Routes>
    )
}