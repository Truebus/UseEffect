//Window Resize Listener
// Task: Create a component that displays the current window width.
// Requirements:
// •	Use useEffect to add an event listener for window resize.
// •	Update the state with the current window width.
// •	Clean up the event listener when the component unmounts.
import { useState, useEffect } from "react";

export const Windowwidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add the event listener for the "resize" event
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <h1>{windowWidth}px</h1>
        </div>
    );
};
