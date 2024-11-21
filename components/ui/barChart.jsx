export function BarChart({ data }) {
  // Get the maximum sales value to calculate the width scale
  const maxSales = Math.max(...data.map((item) => item.sales));

  return (
    <div className="flex flex-col space-y-2">
      {data.map((item, index) => (
        <div key={`${item.name}-${index}`} className="flex items-center space-x-2">
          <span className="w-20">{item.name}</span>
          <div className="flex-grow h-4 bg-gray-200 rounded">
            <div
              className="h-4 bg-blue-500 rounded"
              style={{ width: `${(item.sales / maxSales) * 100}%` }} // Scale width dynamically
            ></div>
          </div>
          <span>{item.sales}</span>
        </div>
      ))}
    </div>
  );
}
