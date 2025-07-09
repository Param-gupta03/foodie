const ShimmerCard = () => {
  return (
    <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow animate-pulse">
      <div className="w-full h-60 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="flex items-center justify-between mb-2">
          <div className="h-3 bg-gray-300 rounded w-1/5"></div>
          <div className="h-3 bg-gray-300 rounded w-1/5"></div>
          <div className="h-3 bg-gray-300 rounded w-1/5"></div>
        </div>
        <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-2 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
