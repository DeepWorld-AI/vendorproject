const ZedHistory = () => {
  return (
    <div className="p-4 flex flex-col items-center mt-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Hi there !!</h1>
        <h2 className="text-2xl font-semibold text-purple-500 mt-2">
          How can I assist you with your contract ?
        </h2>

        <p className="text-gray-500 mt-2">
          Use one of the common contract actions below or start with your own
          query.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {[
          "Review a contract draft",
          "Summarize a contract",
          "Check contract compliance",
          "Check Activity",
        ].map((action, index) => (
          <div
            key={index}
            className="p-2 shadow-sm border text-xs rounded-lg cursor-pointer text-gray-500 hover:bg-gray-100 transition"
          >
            {action}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZedHistory;
