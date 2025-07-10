import Button from "../components/Button";
import Nav from "./Nav";

const Hero = () => {
  return (
    <header className="main-header h-dvh">
        <Nav />
        <div className="container h-full ">
            <div className="flex-col header-content abs-center-y">
                <h6>Hi, I'm</h6>
                <h1 className="title mt-4 mb-1">Justin Kim</h1>
                <h3 className="text-2xl w-64">I make unique <span>experiences</span>, not plain websites</h3>
                <Button message='My Work' type='outline' arrow={true}/>
                {/* <Button /> */}
            </div>
        </div>
    </header>
  );
};

export default Hero;
