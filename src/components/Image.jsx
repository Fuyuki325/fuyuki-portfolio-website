const Image = ({ imgURL }) => {
  return (
    <div>
      <img src={imgURL.src} alt="Image" className="h-20" />
    </div>
  );
};

export default Image;
