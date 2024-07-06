import { UPDATE_USER } from "@/api/graphql/mutation/add-board-model";
import { useMutation } from "@apollo/client";

interface ICreateBoard {
  board_name: string;
  board_kind: string;
}

const useCreateBoard = () => {
  return useMutation<ICreateBoard, ICreateBoard>(UPDATE_USER);
};

export default useCreateBoard;
