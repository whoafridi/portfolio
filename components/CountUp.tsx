import { useEffect, useState } from "react";

interface CountProps {
  count: {
    id: string;
    label: string;
    number: string;
    duration: string;
    mark: string;
  };
}

const CountUp: React.FC<CountProps> = ({ count }) => {
  const { label, number, duration, mark } = count;

  const [counter, setCounter] = useState("0");

  useEffect(() => {
    let start = 0;

    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCounter(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return (
    <div className="col-md-4">
      <h2 className="h1 fw-bold text-warning">
        {counter}
        {mark}
      </h2>
      <h4>{label}</h4>
    </div>
  );
};

export default CountUp;
