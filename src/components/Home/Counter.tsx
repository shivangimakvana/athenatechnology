'use client';
import React from 'react';

function useCounter(target, duration) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    step();
  }, [target, duration]);

  return count;
}

function CounterBox({ title, label, target, suffix = '+', duration }) {
  const count = useCounter(target, duration);

  return (
    <div className="col-lg-4 col-md-6">
      <div className="py-[30px] m-[10px] flex items-center ml-[30px] transition-all duration-200 ease-in-out">

        <div className="counter bg-[#1D4783] text-[50px] block h-[165px] w-[165px] leading-[165px] text-white pl-[35px] rounded-full">
          <i className="flaticon flaticon-presentation"></i>
          <p>fghfgh</p>
        </div>
        <div className="counter ml-[-100px] px-[30px] pt-[10px] pb-[10px]  rounded-[6px] min-h-[236px]  flex flex-col justify-center transition-all duration-200 ease-in-out bg-[#1e303e] border border-[rgba(255,255,255,0.1)]">
          <span className='mb-[30px]'>{title}</span>
          <h4 className="text-[48px] font-bold m-[0]">
            <span>{count}</span>
            <span>{suffix}</span>
          </h4>
          <h3 className="m-[0]">{label}</h3>
        </div>
      </div>
    </div>
  );
}

export default function CounterSection() {
  return (
    <div className="flex flex-wrap items-center justify-center bg-[#223645] bg-cover bg-center bg-no-repeat text-[#fff]" style={{ backgroundImage: "url('/images/banner/baner123.png')" }}>
      <CounterBox title="projects" label="Successful Projects" target={143} duration={2000} suffix="+" />
      <CounterBox title="Our Happy Clients" label="Our Happy Clients" target={143} duration={2000} suffix="+" />
      <CounterBox title="Happy Clients" label="Client Satisfaction" target={99} duration={2000} suffix="%" />
    </div>
  );
}
