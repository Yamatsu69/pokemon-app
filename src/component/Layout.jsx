import React from "react";

function Layout(props) {
  <div className="w-full h-screen overflow-auto bg-Yellow dark:bg-Yellow-dark">
    <nav className="w-full p-4 bg-neon dark:bg-neon-black top-0 sticky">
      <div className="flex flex-col gap-4 md:flex-row lg:flex-row justify-between">
        <div></div>
      </div>
    </nav>
    <div className="w-full h-full bg-Yellow dark:bg-Yellow-dark">
      {props.children}
    </div>
  </div>;
}

export default Layout;
