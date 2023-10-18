import { useNavigate } from 'react-router-dom';
import { Button } from '../Components/Button';

export function Main() {
    const navigate = useNavigate();
    function navigateToTask1() {
        navigate('/Task1');
    }
    function navigateToTask2() {
        navigate('/Task2');
    }

    return (
        <div className="p__main">
            <Button
                onClick={navigateToTask1}
                name="Task1"
                style="button_green"
            />

            <Button
                onClick={navigateToTask2}
                name="Task2"
                style="button_blue"
            />
        </div>
    );
}
