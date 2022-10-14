const Location = ({ name, lat, long, weatherData }) => {
    return (
      <div
      className='color-square'>
      <p>{name}</p>
      <p>{lat}</p>
      <p>{long}</p>
      <p>{weatherData}</p>
    </div>
    )
  }
  export default Location;