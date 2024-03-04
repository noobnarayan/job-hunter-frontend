import React from "react";
import { userService } from "../../services/userService";

function JobDetailsCard({ jobData }) {
  const {
    title,
    salaryRange,
    location,
    employer,
    experience,
    numberOfOpenings,
    numberOfApplicants,
  } = jobData;

  console.log(jobData._id);

  const datePosted = new Date(jobData?.datePosted);

  const now = new Date();

  const diffTime = Math.abs(now - datePosted);
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));

  let timeAgo;

  if (diffMinutes < 60) {
    timeAgo = diffMinutes + " minutes ago";
  } else if (diffHours < 24) {
    timeAgo = diffHours + " hours ago";
  } else if (diffDays < 30) {
    timeAgo = diffDays + " days ago";
  } else {
    timeAgo = diffMonths + " months ago";
  }

  const saveJob = async () => {
    try {
      const res = await userService.saveJob(jobData._id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const applyForJob = async () => {
    try {
      const res = await userService.applyForJob(jobData._id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 border p-4 rounded-3xl shadow">
      <div className="flex justify-between border-b pb-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-medium">{title} </p>
            <p className="text-sm text-gray-600 font-medium">
              {employer?.userProfile?.companyName}
            </p>
          </div>
          <div className="text-gray-500 text-sm flex flex-col gap-2">
            <div className="flex gap-5 ">
              <div className="flex gap-3">
                <span>
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span>{`${experience} Years`}</span>
              </div>
              <div className="flex gap-3">
                <span>
                  <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                </span>
                <span>
                  {salaryRange
                    ? `${salaryRange.from} to ${salaryRange.to}`
                    : "Not Disclosed"}
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <span>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                </span>
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-20 w-20 rounded-3xl border overflow-hidden flex justify-center items-center">
            <img src={employer?.userProfile?.companyLogo} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-3 ">
          <div className="font-light">
            Posted: <span className="font-medium"> {timeAgo}</span>
          </div>
          <div className="font-light">
            Openings: <span className="font-medium">{numberOfOpenings}</span>
          </div>
          <div className="font-light">
            Applicants:{" "}
            <span className="font-medium">{numberOfApplicants}</span>
          </div>
        </div>
        <div className="flex gap-5">
          <button
            className="border border-green-600 h-10 w-20 rounded-3xl text-green-600 font-medium"
            onClick={saveJob}
          >
            Save
          </button>
          <button
            className="h-10 w-20 rounded-3xl bg-green-600 text-white font-medium"
            onClick={applyForJob}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsCard;
