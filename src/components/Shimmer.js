import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <div>
    <div className="flex justify-around">
    {<ShimmerCard/>}
    {<ShimmerCard/>}
    {<ShimmerCard/>}
    {<ShimmerCard/>}
    </div>
    <div className="flex justify-around">
    {<ShimmerCard/>}
    {<ShimmerCard/>}
    {<ShimmerCard/>}
    {<ShimmerCard/>}
    </div>
    </div>
    
  );
};

export default Shimmer;
