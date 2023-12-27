const Image = ({ imgURL }) => {
  
  return (
    <div className="relative shadow-[-20px_16px_0px_0px] shadow-red-500 w-1/2 h-full lg:w-full">
      <img src={imgURL} alt="Image" className="shadow-[20px_-16px_0px_0px] shadow-green-500 " />

    </div>
  );
};

export default Image;
