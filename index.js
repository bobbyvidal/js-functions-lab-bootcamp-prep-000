// write your code below!
function happyHolidays() {
  return('Happy holidays!')
}

function happyHolidaysTo(name)
{
  return (`Happy holidays, ${name}!`)
  
  }
happyHolidaysTo("Jessica")

function happyHolidayTo(holiday, name)
{
  return (`Happy ${holiday}, ${name}!`)
}
happyHolidaysTo("Halloween", "Jessica")

function holidayCountdown(days, holiday)
{
  return (`Its's ${days} days until ${holiday}!`)

}
holidayCountdown("Thanksgiving", "90")