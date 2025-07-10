const Button = ({message, type, arrow}) => {
  return (
    <button className={`flex-center ${type}`}>
      <a href="">{message}</a>
      {arrow ? (
        <img src="/images/icons/arrow-right.svg" alt=""className="ml-2"/>
      ) : (
        console.log(arrow)
      )}
    </button>
    // <button className="outline flex-center">
    //   <a href="">hi</a>
    //   <img src="/images/icons/arrow-right.svg" alt="" />
    // </button>
  );
};

export default Button;
