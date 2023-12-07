import React from "react";
import {
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[2560px] m-auto px-2 py-2 bg-[#24262b]">
      <div className="py-16 px-2 grid lg:grid-cols-3 gap-8 text-grey-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Sydney</li>
              <li className="py-2 text-sm">Adelaide</li>
              <li className="py-2 text-sm">perth</li>
              <li className="py-2 text-sm">Melbourne</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Sydney</li>
              <li className="py-2 text-sm">Adelaide</li>
              <li className="py-2 text-sm">perth</li>
              <li className="py-2 text-sm">Melbourne</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Sydney</li>
              <li className="py-2 text-sm">Adelaide</li>
              <li className="py-2 text-sm">perth</li>
              <li className="py-2 text-sm">Melbourne</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Sydney</li>
              <li className="py-2 text-sm">Adelaide</li>
              <li className="py-2 text-sm">perth</li>
              <li className="py-2 text-sm">Melbourne</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
