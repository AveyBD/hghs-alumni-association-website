import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="max-w-2xl m-auto mt-16">
              <div className="text-center px-4">
                <div className="inline-flex mb-8">
                  <img
                    src="#"
                    width="176"
                    height="176"
                    alt="404 illustration"
                  />
                </div>
                <div className="mb-6">
                  Hmm...this page doesn’t exist. Try searching for something
                  else!
                </div>
                <Link
                  to="/"
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
