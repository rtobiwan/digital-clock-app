const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'standard-time') {
    btn.setAttribute('class', 'military-time');
    btn.textContent = 'Use Standard Time';
    showTime();
  } else {
    btn.setAttribute('class', 'standard-time');
    btn.textContent = 'Use Military Time';
    showTime();
  }
});

function showTime() {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = 'AM';
  let weekDay = weekDays[time.getDay()];
  let month = months[time.getMonth()];
  let day = time.getDate();
  let year = time.getFullYear();

  if (btn.getAttribute('class') === 'standard-time' && hour > 12) {
    hour -= 12;
    am_pm = 'PM';
  }
  if (btn.getAttribute('class') === 'standard-time' && hour == 0) {
    hour = 12;
    am_pm = 'AM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  let currentTime = `${hour}${min}:${sec}`;

  if (btn.getAttribute('class') === 'standard-time') {
    currentTime = hour + ':' + min + ':' + sec + am_pm;
  }

  let todaysDate = `${weekDay} ${month} ${day}, ${year}`;
  document.querySelector('#date').innerHTML = todaysDate;

  document.getElementById('clock').innerHTML = currentTime;
}
showTime();
setInterval(showTime, 1000);
