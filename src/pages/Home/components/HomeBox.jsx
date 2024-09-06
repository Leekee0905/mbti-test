const HomeBox = ({ data }) => {
  return (
    <div className="flex flex-col p-5 rounded-lg justify-center w-96 h-40 overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <h2 className="text-2xl mb-3">{data.title}</h2>
      <span>{data.content}</span>
    </div>
  );
};

export default HomeBox;
