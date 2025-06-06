import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Chips from "../atoms/Chips";
import Contributors from "../atoms/Contributors";

const list: string[] = [
  "assassin",
  "airport",
  "client",
  "sociopath",
  "revenge",
  "murder",
  "lawyer",
  "brutality",
  "dominican republic",
  "secret",
];

const MovieReviewSidebar: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5">
        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <FacebookRoundedIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>

        {/* Status, Language, Budget, Revenue */}
        <div className="bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300 shadow p-4 rounded">
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <p className="font-semibold">Status</p>
              <p className="text-gray-600 dark:text-gray-300">Released</p>
            </div>
            <div>
              <p className="font-semibold">Original Language</p>
              <p className="text-gray-600 dark:text-gray-300">English</p>
            </div>
            <div>
              <p className="font-semibold">Budget</p>
              <p className="text-gray-600 dark:text-gray-300">$20,000,000.00</p>
            </div>
            <div>
              <p className="font-semibold">Revenue</p>
              <p className="text-gray-600 dark:text-gray-300">
                $217,000,000.00
              </p>
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300 shadow p-4 rounded">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold">Keywords</h4>
            <div className="flex flex-wrap gap-2">
              <Chips list={list} />
            </div>
          </div>
        </div>

        {/* Contributors */}
        <div className="bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300 shadow p-4 rounded">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold">Top Contributors</h4>
            <div className="flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <Contributors key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieReviewSidebar;
