// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef, useEffect } from "react";

const Button = ({message, type, arrow}) => {
   
    return (
        <button className={`button flex-center mt-4 ${type}`}>
            <a href="">{message}</a>
            {arrow && (
                <img src="/images/icons/arrow-right.svg" alt="" className="ml-2"/>
            )}
        </button>
    );
};

export default Button;
