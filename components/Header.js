import { ShortLogo, FullLogo } from "./Logo";
import { SearchIcon, GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { Dialog } from "@headlessui/react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
const Header = () => {
  // return <AirBnbLogo />;
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCalendarOpen, setIsCalenderOpen] = useState(false);
  const [isSetPlacesToStay, setIsSetPlacesToStay] = useState(false);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    // with flex
    <header className="sticky z-50 px-8 py-4 font-medium bg-white shadow-sm md:justify-between lg:px-20">
      {/* // <header className="sticky z-10 grid justify-between grid-cols-2 px-12 py-4 font-medium bg-white shadow-sm md:grid-cols-3"> */}
      <div className="flex items-center justify-center">
        <div className="items-center flex-grow hidden text-red-500 cursor-pointer md:flex flex-ba">
          <FullLogo className="hidden md:block md:w-40" />
          <ShortLogo className="hidden md:hidden" />
        </div>
        <div className="flex items-center justify-center md:w-80">
          {!showSearchForm && (
            <button
              onClick={() => setShowSearchForm(true)}
              className="flex items-center justify-between h-12 px-4 border-2 border-gray-400 rounded-full shadow-md md:w-full"
            >
              <div className="">Start your search </div>
              <SearchIcon className="w-8 h-8 p-2 ml-6 font-bold text-white bg-red-500 rounded-full" />
            </button>
          )}
          {showSearchForm && (
            <div className="relative">
              <h3
                className="underline"
                onClick={() => setIsSetPlacesToStay(true)}
              >
                Places to Stay
              </h3>
            </div>
          )}
        </div>
        <div className="items-center justify-end flex-grow hidden md:flex md:w-36">
          <button>Become a host</button>
          <GlobeAltIcon className="w-6 h-6 mx-4 cursor-pointer" />
          <div className="flex items-center px-2 border-2 border-gray-400 rounded-full cursor-pointer ">
            <MenuIcon className="w-6 h-6 mr-2" />
            <div className="relative">
              <UserCircleIcon className="w-8 h-8 text-gray-600" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
      {showSearchForm && isSetPlacesToStay && (
        <div className="my-4">
          <div className="flex justify-center mx-auto bg-gray-200 rounded-full lg:w-3/4">
            <button className="flex flex-col flex-grow px-6 py-3 rounded-full focus-within:bg-white focus-within:shadow-lg">
              <h3 className="text-left">Location</h3>
              <input
                className="mr-auto text-left bg-transparent outline-none"
                placeholder="Where are you going"
              />
            </button>
            <button
              className="flex items-center justify-center flex-grow px-6 py-3 rounded-full focus-within:bg-white focus-within:shadow-lg"
              onClick={() => setIsCalenderOpen(true)}
            >
              Check in
              <br />
              {startDate.toISOString().substring(0, 10)}
            </button>
            <button
              className="flex items-center justify-center flex-grow px-6 py-3 rounded-full focus-within:bg-white focus-within:shadow-lg"
              onClick={() => setIsCalenderOpen(true)}
            >
              Check Out
              <br />
              {endDate.toISOString().substring(0, 10)}
            </button>
            <button className="flex flex-col justify-center flex-grow px-6 py-3 rounded-full focus-within:bg-white focus-within:shadow-lg">
              <h3 className="text-left">Guests</h3>
              <input
                type="number"
                className="bg-transparent outline-none"
                placeholder="add Guests"
              ></input>
            </button>
            <button className="flex items-center px-6 py-4 m-2 text-lg font-semibold text-white rounded-full from-pink-700 bg-gradient-to-r to-pink-800">
              <SearchIcon className="w-4 h-4 mr-3" />
              Search
            </button>
          </div>
          {isCalendarOpen && (
            <div className="absolute left-0 flex justify-center w-full">
              <DateRangePicker
                minDate={new Date()}
                ranges={[selectionRange]}
                rangeColors={["black"]}
                onChange={handleSelect}
                className="p-4 z-50 text-xl flex w-[500px] mx-auto mt-4 top-[90%] bg-white shadow-xl rounded-xl"
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
