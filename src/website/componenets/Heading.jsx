const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subTitle}</p>
    </div>
  );
};

export default Heading;
