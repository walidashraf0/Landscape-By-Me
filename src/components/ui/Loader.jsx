const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
    </div>
  );
};

export default Loader;