import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }
    useEffect(() => {
        fetchTours();
    }, []);
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
        }
    }
    if(loading) {
        return (
            <React.Fragment>
                <main>
                    <Loading />
                </main>
            </React.Fragment>
        );
    } else if(tours.length === 0) {
        return (
            <React.Fragment>
                <main>
                    <div className="title">
                        <h2>No Tours Left</h2>
                        <button className="btn" type="button" onClick={fetchTours}>Refresh</button>
                    </div>
                </main>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <main>
                    <Tours tours={tours} removeTour={removeTour} />
                </main>
            </React.Fragment>
        );
    }
}

export default App
