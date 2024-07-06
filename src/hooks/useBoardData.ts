import { GET_BOARDS } from "@/api/graphql/query/board-model";
import { useQuery } from "@apollo/client";

interface IBoardData {
  boards: {
    columns: {
      id: string;
      title: string;
      type: string;
    }[];
  }[];
}

const useBoardData = () => {
  return useQuery<IBoardData>(GET_BOARDS, {
    variables: { limit: 25, page: 1 },
  });
};

export default useBoardData;
