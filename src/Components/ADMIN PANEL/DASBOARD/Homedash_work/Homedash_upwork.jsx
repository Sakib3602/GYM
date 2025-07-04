import React from "react";

const Homedash_upwork = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
              Welcome back, Nitto Biswas!
            </h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">
              Here's a quick overview of your gym today
            </p>
            <p className="text-blue-200 text-xs sm:text-sm md:text-base">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Desktop/Tablet Actions */}
        </div>
      </div>
    </div>
  );
};

export default Homedash_upwork;
