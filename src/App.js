import React, {useState, useEffect} from 'react';
import Counter from './Counter';

function App() {
    const [isClicker, setClicker] = useState(true);

    return (
        <div className="App">
            <h2>React App</h2>
            <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
            {isClicker && <Counter/>}
        </div>
    );
}

export default App;