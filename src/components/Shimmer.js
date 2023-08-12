const Skimmer = () => {
  return (
    <div className="shimmer-div">
    {
        Array(48).fill("").map((e)=>(<div className="shimmer"></div>))
    }
    </div> 
  );
};

export default Skimmer;
