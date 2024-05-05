import React from "react";

const TabNavItem = ({ title, activeTab, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <li
      onClick={handleClick}
      className={activeTab === title ? "timetable__day timetable__day_selected" : "timetable__day"}>
      { title }
    </li>
  );
};
export default TabNavItem;
