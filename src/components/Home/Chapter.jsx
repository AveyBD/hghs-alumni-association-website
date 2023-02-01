import React from "react";

const Chapter = () => {
  return (
    <div>
      <a
        href="#"
        class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <span class="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          217 Members
        </span>

        <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
          <h3 class="text-2xl font-bold">Rome</h3>

          <p class="text-sm">Italy</p>
        </div>
      </a>
    </div>
  );
};

export default Chapter;
