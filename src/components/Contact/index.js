import React from "react";
import "./index.scss";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          If you want to discuss anything feel free to email me or call me :)
        </p>
        <div className="flex gap-5 justify-center">
          <p className="py-2">
            <span className="font-bold text-indigo-500">Email:</span>{" "}
            s2vahidi@uwaterloo.ca
          </p>
          <p className="py-2">
            <span className="font-bold text-indigo-500">Phone:</span> +1
            (647)-671-3324
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
