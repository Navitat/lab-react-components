function Header() {
  const date = new Date();
  const optionsWeekday = { weekday: "long"};
  const optionsMonth = {month: "long"};

  const dayName = date.toLocaleDateString("en-UK", optionsWeekday);
  const monthName = date.toLocaleDateString("en-UK", optionsMonth );
  const dayNum = date.getDate();
  const year = date.getFullYear()

  return <h2>Today is {dayName}, {monthName} {dayNum}th, {year} </h2>
}

export default Header