"use client";

import React from "react";
import {FaChartPie} from "react-icons/fa";
import {GrTechnology} from "react-icons/gr";
import {FaHashtag} from "react-icons/fa";
import {GiClockwork} from "react-icons/gi";
import {GiCrossMark} from "react-icons/gi";
import {GiUpgrade} from "react-icons/gi";

export default function Features() {
  return (
    <div  id="feature">
      <section className="">
        {/* TOPIC DIV */}
        <div className="max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Powerful Features for Enhanced Data Visualization
              </h2>

              <p className="mt-4 text-gray-600">
                Unlock the Full Potential of Twitter Data with Our Comprehensive
                Feature Set, Empowering You to Visualize and Analyze Data Like
                Never Before.
              </p>
            </div>

            {/* 1. Interactive Charts and Graphs */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 ">
              <span
                className="block rounded-none border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                
              >
                <span className="inline-block rounded-none border-black border-2 p-3 bg-white">
                <FaChartPie className="w-5 h-5" />
                </span>

                <h2 className="mt-2 font-bold">
                  Interactive Charts and Graphs
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Dive deep into the data with interactive charts and graphs
                  that allow for seamless exploration and analysis.
                </p>
              </span>

              {/* 2. Sentiment Analysis */}
              <span
                className="block rounded-none border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                
              >
                <span className="inline-block rounded-none border-black border-2 p-3 bg-white">
                  <GrTechnology className="w-5 h-5" />
                </span>

                <h2 className="mt-2 font-bold">Sentiment Analysis</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Gain valuable insights into public opinion with sentiment
                  analysis capabilities, helping you gauge the overall sentiment
                  surrounding specific topics or hashtags in Nepali Context
                </p>
              </span>

              {/* 3. Hashtag Tracking */}
              <span
                className="block rounded-none border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                
              >
                <span className="inline-block rounded-none border-black border-2 p-3 bg-white">
                  <FaHashtag className="w-5 h-5" />
                </span>

                <h2 className="mt-2 font-bold">Hashtag Tracking</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Track the popularity and engagement of hashtags , allowing you
                  to identify trending topics and monitor campaign performance
                </p>
              </span>

              {/* 4. User Engagement Metrics */}
              <span
                className="block rounded-none border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                
              >
                <span className="inline-block rounded-none border-black border-2 p-3 bg-white">
                  <GiClockwork className="w-5 h-5" />
                </span>

                <h2 className="mt-2 font-bold">User Engagement Metrics</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Measure and analyze user engagement metrics such as likes,
                  retweets, and replies, providing valuable insights into the
                  reach and impact of your tweets
                </p>
              </span>

              {/* 6. Cross-platform Compatibility */}
              <span
                className="block rounded-none border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                
              >
                <span className="inline-block rounded-none border-black border-2 p-3 bg-white">
                 <GiCrossMark className="w-5 h-5" />
                </span>

                

                <h2 className="mt-2 font-bold">Cross-platform Compatibility</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Access and interact with your data visualizations seamlessly
                  across desktop, tablet, and mobile devices for convenient
                  monitoring on-the-go
                </p>
              </span>

              {/* 6. Eliminate Guesswork and Drive Social Media Growth with
                  Data-Driven Insights */}


              <span
                className="block rounded-none border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
               
              >
                <span className="inline-block rounded-none border-black border-2 p-3 bg-white">
                  <GiUpgrade className="w-5 h-5" />
                </span>

                <h2 className="mt-2 font-bold">
                  Eliminate Guesswork and Drive Social Media Growth with
                  Data-Driven Insights
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Leverage data-driven insights to make informed decisions,
                  optimize your social media strategy, and fuel measurable
                  growth
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
