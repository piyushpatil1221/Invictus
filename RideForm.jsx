import { useState } from "react";
import "./RideForm.css";

function RideForm({ addRide }) {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (origin && destination && time) {
            addRide({ origin, destination, time });
            setOrigin("");
            setDestination("");
            setTime("");
        }
    };

    return (
        <form className="ride-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <button type="submit">Add Ride</button>
        </form>
    );
}

export default RideForm;