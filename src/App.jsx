import { useState, useEffect } from 'react';
import CountdownCard from './components/CountdownCard';
import { calculateTimeLeft } from './utils/time';
import './App.css';

// (GMT+7)
const TARGET_DATE = new Date('2026-11-20T17:00:00+07:00').getTime();

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(TARGET_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <main>
        <h1>We're launching soon</h1>
        <div className="timer-container">
          <CountdownCard number={timeLeft.days} label="Days" />
          <CountdownCard number={timeLeft.hours} label="Hours" />
          <CountdownCard number={timeLeft.minutes} label="Minutes" />
          <CountdownCard number={timeLeft.seconds} label="Seconds" />
        </div>
      </main>
      <footer className="social-footer">
        <a href="#" aria-label="Facebook">
          <img src="/images/icon-facebook.svg" alt="Facebook" />
        </a>
        <a href="#" aria-label="Pinterest">
          <img src="/images/icon-pinterest.svg" alt="Pinterest" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src="/images/icon-instagram.svg" alt="Instagram" />
        </a>
      </footer>
    </>
  );
}

export default App;
