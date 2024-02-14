import React from "react";

export default function About() {
    const Testname = "Sam";
    
  return (
    <main className="mt-10">
      <div>
      {Testname && Testname === "Sam" &&(
        <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</>
        )}
      </div>
    </main>
  );
}

