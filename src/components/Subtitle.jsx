
const Subtitle = ({ message, icon}) => {
  return (
    <div className="flex mb-2 mt-3 items-center">
        <img src={icon} className="mr-3 icon" alt="" />
        <h5 className="subtitle">{message}</h5>
    </div>
  )
}

export default Subtitle