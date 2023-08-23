import router from "next/router";
import React from "react";
import { IoMdClose } from "react-icons/io";

const ThankYou = () => {
  const handleClose = (e: any) => {
    setTimeout(() => {
      router.push("/");
    });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-300 to-green-300">
      <div className="max-w-3xl p-8 bg-white shadow-lg rounded-md text-center">
        <IoMdClose size={25} onClick={handleClose} />
        <h1 className="text-4xl font-bold text-indigo-800 mb-6">
          Thank You for Your Cooperation!
        </h1>
        <p className="text-lg text-gray-800 mb-4">
          {/* Your cooperation has made a difference. For any inquiries or support,
          we're here to assist you. */}
          We appreciate your support and cooperation. If you have any further
          questions or need assistance, please don't hesitate to contact us.
        </p>
        <p className="text-lg text-gray-700">With regards, IMOT Team 💚</p>
      </div>
    </div>
  );
};

export default ThankYou;
