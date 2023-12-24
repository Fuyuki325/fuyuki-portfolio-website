const Image = ({ imgURL }) => {
  
  return (
    <div className="relative w-1/5 h-1/5 shadow-[-20px_16px_0px_0px] shadow-red-500">
      <img src={imgURL} alt="Image" className="shadow-[20px_-16px_0px_0px] shadow-green-500 w-full" />
    </div>
  );
};

export default Image;
