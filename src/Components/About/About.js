import React from "react";
import me from "../../images/me.jpg";

const About = () => {
  return (
    <div className="flex justify-center items-center h-[750px]">
      <div className="text-center font-semibold text-xl">
        <img className="w-[250px] mx-auto" src={me} alt="" />
        <p className="my-5">Hi, my name is Mahadeb Sen.</p>
        <p className="my-5">
          In short, I'm passionate about programming. And I love to design web
          site. So that's why I decided to be a Full stack web developer.{" "}
        </p>
        <p className="my-5">
          To fulfil my desire or, to achieving my goals, I have joined
          Programming hero bootcamp. Also I'm doing a course in
          freecodecamp.org.
        </p>
      </div>
    </div>
  );
};

export default About;
