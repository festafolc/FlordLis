import { useState } from "react";
import './counterUnits.css';

export const CounterUnits = () => {

    const [counter, setCounter] = useState<number>(1);

    // Increase counter
    const increase = () => {

        if (counter < 5) {

            setCounter(count => count + 1);
        }
    };

    // Decrease counter
    const decrease = () => {

        if (counter > 1) {

            setCounter(count => count - 1);
        }
    };

    return (
        <>
            <section className="CU-container__units">
                <span className="CU-units__number">{counter}</span>
                <div className="CU-units__counter">
                    <button className="CU-counter__button" onClick={increase}>+</button>
                    <button className="CU-counter__button" onClick={decrease}>-</button>
                </div>
            </section>
        </>
    )
}
