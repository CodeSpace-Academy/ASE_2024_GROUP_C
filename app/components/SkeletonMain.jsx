const SkeletonGrid = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {/* Creating 8 skeletons to mimic the recipe cards */}
        {Array(8).fill("").map((_, index) => (
          <div
            key={index}
            className="animate-pulse p-4 bg-white shadow rounded-lg space-y-4"
          >
            {/* Image Skeleton */}
            <div className="bg-gray-200 h-40 w-full rounded-md"></div>
            {/* Text Skeleton */}
            <div className="space-y-2">
              <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
              <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkeletonGrid;