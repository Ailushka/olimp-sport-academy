import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import { timetableData } from "../../data/timetableData";

function Timetable() {
  const [activeTab, setActiveTab] = useState('Пн');

  const handleTabClick = (day) => {
    setActiveTab(day);
  }

  const activeDaySchedule = timetableData.find(({ day }) => day === activeTab);

  return (
    <div className="timetable">
      <h2 className="timetable__title"><span className="section-title">Расписание</span></h2>
      <ul className="timetable__nav">
        {timetableData.map(({ day }) => (
          <TabNavItem
            key={day}
            title={day}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        ))
        }
      </ul>
      <div className="timetable__outlet">
        <ul className="timetable__content">
          {activeDaySchedule && activeDaySchedule.workouts.map(({ time, activity }, index) => (
            <li key={index} className="timetable__interval">
              <time className="timetable__timing-start" dateTime={time}>{time}</time>
              <span className="timetable__discipline">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Timetable;
