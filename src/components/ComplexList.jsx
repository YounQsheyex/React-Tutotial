import React from "react";

const ComplexList = () => {
  const staff = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1696505523865-84c7c9372901?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3BvcnQlMjBwaG90b2dyYXBofGVufDB8fDB8fHww",
      name: "John Doe",
      role: "Chief Operating Officer",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1666852327656-5e9fd213209b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3Nwb3J0JTIwcGhvdG9ncmFwaHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Peter Pan",
      role: "Head of Finanace",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1693000696693-26aa43e8b97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzc3BvcnQlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      name: "Jane Doe",
      role: "Head of Marketing",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1690394943834-8f9491b750f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Liu Kang",
      role: "Creative Director",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1153469287/photo/frontal-male-passport-photo-isolated-on-white-background-eu-standardization.jpg?s=2048x2048&w=is&k=20&c=R3gZgBb_jJZqaoKyQdkgvHQCbOpwsMZuiolrFNjsZZY=",
      name: "Sonya Blade",
      role: "Admin Officer",
    },
  ];
  return (
    <div className="bg-blue-200 py-10">
      <h1 className="text-center text-blue-500 text-4xl font-bold">
        Meet The Team
      </h1>
      <p className="my-5 text-center text-md text-black w-[600px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sed
        tenetur sunt vero ipsam aut reprehenderit dignissimos enim vel dolor,
        odio, cupiditate temporibus. Accusamus sed molestias aliquam harum,
        labore itaque enim nisi molestiae vero autem!
      </p>
      <div className="flex gap-3.5 max-w-[1000px] flex-wrap mx-auto">
        {staff.map((member) => {
            const {id,name,role,image}=member
          return (
            <div
              key={id}
              className="w-[320px] bg-white p-2.5 rounded-b-md"
            >
              <img
                src={image}
                alt={name}
                className="rounded-md w-full h-[300px] object-cover"
              />
              <h1 className="text-blue-900 font-bold text-2xl mt-3">{name}</h1>
              <p className="text-gray-400 font-semibold">{role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexList;
