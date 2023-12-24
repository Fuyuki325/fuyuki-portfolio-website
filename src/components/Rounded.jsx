
const Rounded = ({ imgURL }) => {
  return (
    <div>
      <img src={imgURL} className="h-16 rounded-full shadow-2xl drop-shadow-4xl mx-3 my-3" />
    </div>
  );
}

export default Rounded;