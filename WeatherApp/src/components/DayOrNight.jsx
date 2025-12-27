function DayOrNight({ weather, }) {
  if (!weather) return null; 
  const time = weather.is_day;

  return (
    <img
      src={
        time === 1
          ? "/sun1.png"
          : "/moon.png"
      }
      alt={time === 1 ? "sun" : "moon"}
      className=" w-12 h-12 ml-[650px] mt-[-180px]"
    />
  );
}

export default DayOrNight