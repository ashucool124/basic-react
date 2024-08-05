const FeedSection = () => {
  const feedbackData = [
    { id: 1, name: "Alice Johnson", rating: 4, comments: "Great service!" },
    { id: 2, name: "Bob Smith", rating: 5, comments: "Excellent product!" },
    {
      id: 3,
      name: "Carol Davis",
      rating: 3,
      comments: "Good, but can improve.",
    },
    { id: 4, name: "David Wilson", rating: 5, comments: "Loved it!" },
    { id: 5, name: "Eva Green", rating: 2, comments: "Not satisfied." },
    {
      id: 6,
      name: "Frank Miller",
      rating: 4,
      comments: "Very good experience.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.97 0 1.371 1.24.588 1.81l-3.39 2.464a1 1 0 00-.363 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118L10 14.347l-3.39 2.464c-.785.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.363-1.118L2.61 9.397c-.783-.57-.382-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
    ));
  };

  return (
    <div className="p-4 md:w-[30%] w-full bg-gray-800 rounded-sm flex flex-col gap-3">
      <p className="text-white text-2xl font-semibold">Customer's feedback</p>
      <div className="h-64 overflow-y-scroll  bg-gray-800 shadow rounded-lg p-4">
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              {feedback.name}
            </h3>
            <div className="flex items-center mt-2 mb-4">
              {renderStars(feedback.rating)}
            </div>
            <p className="text-gray-200">{feedback.comments}</p>
            <div className="border-t border-gray-600 mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeedSection;
