const HomeBox = ({ data }) => {
  return (
    <div className="flex flex-col p-5 rounded-lg bg-white justify-center w-96 h-40 overflow-hidden shadow-lg">
      <h2 className="text-2xl mb-3">{data.title}</h2>
      <span>{data.content}</span>
    </div>
  );
};

export default HomeBox;
