@ -0,0 +1,22 @@
import { useState } from "react";
import RideForm from "./RideForm";
import RideList from "./RideList";
import "./App.css";

function App() {
    const [rides, setRides] = useState([]);

    const addRide = (ride) => {
        setRides([...rides, ride]);
    };

    return (
        <div className="app-container">
            <h1>RideShare - Find & Share Rides</h1>
            <RideForm addRide={addRide} />
            <RideList rides={rides} />
        </div>
    );
}

export default App;