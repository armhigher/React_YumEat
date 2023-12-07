import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-[2560px] m-auto text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-6 text-2xl">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign up to join our newsletter and step up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <input
              type="email"
              placeholder="email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none">
              Notify me
            </button>
          </div>
          <p>
            we are concerned about the security of your data, Read {""}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
        <hr className="my-8 bg-grey-700 border-2 dark:bg-grav-700" />
      </div>
    </div>
  );
};

export default NewsLetter;
