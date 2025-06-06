import React from "react";

const HeaderLogo = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <h3 className="text-2xl font-bold md:hidden">TMDB</h3>
      <img src="/assets/images/app/tmdbTopLogo.png" alt="" className="hidden md:block" />
    </div>
  );
};

export default HeaderLogo;
