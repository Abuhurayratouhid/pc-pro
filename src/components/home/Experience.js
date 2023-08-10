import React from "react";

const info = [
  { id: 1, number: 7, text: "Years of experiences" },
  { id: 2, number: "1000 +", text: "Devices Repaired" },
  {
    id: 4,
    number: "100%",
    class:
      "w-52 h-52 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-300 flex flex-col justify-center items-center bg-black rounded-full",
    text: "Satisfied customers",
  },
  { id: 3, number: "45 +", text: "Skilled Technicians" },
];

const Experience = () => {
  return (
    <div className="w-full lg:h-[31vh] pt-2 lg:pt-0 bg-secondary lg:px-36 flex flex-col lg:flex-row justify-between items-center">
      {info.map((item) => (
        <div
          key={item.id}
          className={
            item.class
              ? item.class
              : "w-52 h-52 mb-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-300 flex flex-col justify-center items-center bg-black rounded-full"
          }
        >
          <h3 className="text-3xl font-bold text-primary">{item.number}</h3>
          <p className="text-accent">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
