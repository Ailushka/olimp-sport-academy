import React from 'react';

const scheduleData = [
  { day: 'Понедельник', workouts: [
    { time: '16:00', activity: 'Тхэквондо' }, 
    { time: '16:30', activity: 'Самбо' }, 
    { time: '17:30', activity: 'Самбо' },
    { time: '17:30', activity: 'Тхэквондо' }, 
    { time: '19:00', activity: 'Самбо' },
    { time: '19:00', activity: 'Вольная борьба' },
    { time: '20:00', activity: 'Вольная борьба' }
] },

  { day: 'Вторник', workouts: [
    { time: '16:00', activity: 'Дзюдо' }, 
    { time: '16:30', activity: 'Каратэ' },
    { time: '17:00', activity: 'Дзюдо' }, 
    { time: '18:00', activity: 'Каратэ' },
    { time: '18:00', activity: 'ММА' },
    { time: '19:30', activity: 'ММА' },
    { time: '19:30', activity: 'Бокс' },


  ] },

  { day: 'Среда', workouts: [
    { time: '16:00', activity: 'Тхэквондо' }, 
    { time: '16:30', activity: 'Самбо' }, 
    { time: '17:30', activity: 'Самбо' },
    { time: '17:30', activity: 'Тхэквондо' }, 
    { time: '19:00', activity: 'Самбо' },
    { time: '19:00', activity: 'Вольная борьба' },
    { time: '20:00', activity: 'Вольная борьба' }
  ] },

  { day: 'Четверг', workouts: [
    { time: '16:00', activity: 'Дзюдо' }, 
    { time: '16:30', activity: 'Каратэ' },
    { time: '17:00', activity: 'Дзюдо' }, 
    { time: '18:00', activity: 'Каратэ' },
    { time: '18:00', activity: 'ММА' },
    { time: '19:30', activity: 'ММА' },
    { time: '19:30', activity: 'Бокс' },
  ] },

  { day: 'Пятница', workouts: [
    { time: '16:00', activity: 'Тхэквондо' }, 
    { time: '16:30', activity: 'Самбо' }, 
    { time: '17:30', activity: 'Самбо' },
    { time: '17:30', activity: 'Тхэквондо' }, 
    { time: '19:00', activity: 'Самбо' },
    { time: '19:00', activity: 'Вольная борьба' },
    { time: '20:00', activity: 'Вольная борьба' }
  ] },
  { day: 'Суббота', workouts: [
    { time: '11:00', activity: 'Бокс' }, 
    { time: '11:00', activity: 'Дзюдо' }, 
    { time: '19:00', activity: 'ММА' }] },

];

function Schedule() {
  return (
    <div className="schedule-container container">
      <h2 className='schedule_name'>Расписание</h2>
      <table className="schedule">
        <thead>
          <tr>
            <th style={{ color: 'black', fontSize: 20 }}><b>День недели</b></th>
            <th style={{ color: 'black' , fontSize: 20}}><b>Время</b></th>
            <th style={{ color: 'black', fontSize: 20 }}><b>Секция</b></th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td style={{ fontWeight: 'bold'}}>{item.day}</td>
              <td>
                <ul>
                  {item.workouts.map((workout, i) => (
                    <li key={i}>{workout.time}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {item.workouts.map((workout, i) => (
                    <li key={i}>{workout.activity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
