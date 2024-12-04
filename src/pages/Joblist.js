import React from "react";
import pesoLogo from "../assets/peso-logo.png";
import joblistBanner from "../assets/joblist.jpg";

const Joblist = () => {
  const jobs = [
    {
      companyLogo: pesoLogo,
      companyName: "company Inc",
      jobTitle: "Shop Manager",
      location: "New York Cubao",
      tags: ["Creative", "Full Time"],
      salary: "10000-15000",
      deadline: "21st Sep, 2023",
    },
    {
      companyLogo: pesoLogo,
      companyName: "Company Inc",
      jobTitle: "Creative Designer",
      location: "Mexico Pampanga",
      tags: ["Creative", "Designer"],
      salary: "25000-35000",
      deadline: "27th Sep, 2023",
    },
    {
      companyLogo: pesoLogo,
      companyName: "Company Inc",
      jobTitle: "Janitor",
      location: "Fairview Quezon City",
      tags: ["Creative", "Designer"],
      salary: "25000-35000",
      deadline: "27th Sep, 2023",
    },
  ];

  return (
    <div>
      <div className="text-center py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${joblistBanner})` }}>
        <div className="mx-auto max-w-4xl py-12 mt-20 px-6 rounded-lg bg-white/70 backdrop-blur-md">
          <h1 className="text-darkblue font-bold text-2xl sm:text-3xl md:text-4xl">Available Job for You</h1>
          <p className="text-gray-600 text-base sm:text-lg pt-2">
            Browse our available positions and find the perfect job to match your skills and interests.
          </p>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row py-16 lg:px-32 px-6">
        {/* Search Filter */}
        <div className="lg:w-1/4 w-full p-4 bg-gray-100 rounded-lg mb-6 lg:mb-0">
          <h2 className="font-bold text-lg mb-4">Search Filter</h2>
          <input
            type="text"
            placeholder="Search by job title, company, or location"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Job Listings */}
        <div className="lg:w-3/4 w-full sm:px-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 bg-white shadow rounded-lg mb-4"
            >
              {/* Job Details */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <img
                  src={job.companyLogo}
                  alt={`${job.companyName} logo`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-blue font-semibold">{job.companyName}</h3>
                  <h2 className="text-xl font-bold">{job.jobTitle}</h2>
                  <p className="text-gray-500">{job.location}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-2">💰 {job.salary}</p>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end space-y-2 mt-4 lg:mt-0">
                <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-blue">
                  Apply Now
                </button>
                <p className="text-gray-500">
                  Deadline: <span className="font-bold">{job.deadline}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joblist;
