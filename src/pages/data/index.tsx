import useBoardData from "@/hooks/useBoardData";

const DataPage = () => {
  const { data, loading } = useBoardData();
  console.log(data?.boards);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.boards.map((board, idx) => {
            return (
              <div key={idx}>
                {board.columns.map((column) => {
                  return <div>{column.title}</div>;
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DataPage;
