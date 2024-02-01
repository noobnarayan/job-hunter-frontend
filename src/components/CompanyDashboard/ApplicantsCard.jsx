import React from "react";

function ApplicantsCard() {
  return (
    <div className="rounded border shadow py-3.5 px-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-5 ">
          <div className="h-16 rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dip7jve0u/image/upload/f_auto,q_auto/vdbpav5ox0qqafez4nfw"
              className="h-16 rounded-full"
            />
          </div>
          <div>
            <div>
              <h3 className="font-semibold text-xl">Narayan Das</h3>
            </div>
            <div className="text-xs font-medium text-gray-600">
              <span>10 Years of exp</span>
              <span>Islampur, West Bengal</span>
            </div>
            <div className="text-xs bg-green-200 px-1.5 py-px rounded-md font-medium text-green-600 my-1.5 flex items-center justify-center cursor-pointer">
              ✅ Applied for: Software Development Engineer I
            </div>
          </div>
        </div>
        <div className="flex gap-3 h-6">
          <div className="flex justify-center items-center bg-green-200 p-1 rounded">
            <i className="fa-brands fa-linkedin-in text-green-600 "></i>
          </div>
          <div className="flex justify-center items-center bg-green-200 py-1 px-1.5 rounded">
            <span className="text-green-700 text-xs font-semibold">
              Resume ✨
            </span>
          </div>
          <div className="flex justify-center items-center bg-green-200 py-1 px-1.5 rounded">
            <span className="text-green-700 text-xs font-semibold">
              View profile 👀
            </span>
          </div>
        </div>
      </div>
      <div className="text-sm flex gap-5 px-3">
        <p className="font-semibold text-gray-600 underline">Bio</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum est
          quibusdam, consequuntur sed eaque dolores quidem asperiores at, ullam
          nihil, nobis reprehenderit cupiditate eveniet officiis nisi! Non,
          repellat enim?
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-3.5">
          <p className="text-gray-500 text-sm">Experience</p>
          <div className="flex gap-4 pl-2">
            <div className="h-11 rounded-lg overflow-hidden border p-1 flex justify-center items-center">
              <img
                src="https://photos.wellfound.com/startups/i/267839-22e9550a168c9834c67a3e55e2577688-medium_jpg.jpg?buster=1677467708"
                className="h-9"
              />
            </div>
            <div>
              <p className="font-medium text-sm">Chief Product Officer</p>
              <p className="text-xs text-gray-500">Google LLC</p>
              <p className="text-xs text-gray-400 font-medium">
                May 2019 to Aug 2021 - 2 years 4 months
              </p>
            </div>
          </div>
          <div className="flex gap-4 pl-2">
            <div className="h-11 rounded-lg overflow-hidden border p-1 flex justify-center items-center">
              <img
                src="https://photos.wellfound.com/startups/i/267839-22e9550a168c9834c67a3e55e2577688-medium_jpg.jpg?buster=1677467708"
                className="h-9"
              />
            </div>
            <div>
              <p className="font-medium text-sm">Chief Product Officer</p>
              <p className="text-xs text-gray-500">Google LLC</p>
              <p className="text-xs text-gray-400 font-medium">
                May 2019 to Aug 2021 - 2 years 4 months
              </p>
            </div>
          </div>
        </div>
        <div className="my-2 flex flex-col gap-1">
          <p className="text-gray-500 text-sm my-2">Education</p>
          <div className="text-xs font-medium pl-2">
            <div className="flex items-center gap-3">
              <p>
                Bachelor of Arts - BA, English Language and Literature/Letters
              </p>
              <div className="h-1.5 w-1.5 bg-gray-600 rounded-full"></div>
              <p className="text-gray-400">2020 - 2023</p>
            </div>
            <p className="text-gray-500 my-1">University Of North Bengal</p>
          </div>
          <div className="text-xs font-medium pl-2">
            <div className="flex items-center gap-3">
              <p>
                Bachelor of Arts - BA, English Language and Literature/Letters
              </p>
              <div className="h-1.5 w-1.5 bg-gray-600 rounded-full"></div>
              <p className="text-gray-400">2020 - 2023</p>
            </div>
            <p className="text-gray-500 my-1">University Of North Bengal</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 justify-end">
        <button className="p-2 px-4 font-medium text-xs rounded-md bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-700 flex items-center justify-center">
          ❌ Not intrested
        </button>
        <button className="p-2 px-4 font-medium text-xs rounded-md bg-black text-white hover:bg-gray-800 hover:text-white flex items-center justify-center">
          🔖 Shortlist
        </button>
        <button className="p-2 px-4 font-medium text-xs rounded-md bg-black text-white hover:bg-gray-800 hover:text-white flex items-center justify-center">
          💬 Request to chat
        </button>
      </div>
    </div>
  );
}

export default ApplicantsCard;