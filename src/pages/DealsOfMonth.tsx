import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import dealsofmonth from '../assets/login.png'

interface CountdownProps {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl md:text-3xl font-bold">{value}</span>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

const DealsOfMonth: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownProps>({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });
  useEffect(() => {
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, mins, secs });

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-12 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Deals of the Month</h2>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters
            </p>

            <div className="flex justify-between max-w-md">
              <CountdownItem value={countdown.days} label="Days" />
              <CountdownItem value={countdown.hours} label="Hours" />
              <CountdownItem value={countdown.mins} label="Mins" />
              <CountdownItem value={countdown.secs} label="Secs" />
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-red-500 rounded-lg -z-10"></div>
            <img
              src={dealsofmonth}
              alt="Deal of the month product"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfMonth;