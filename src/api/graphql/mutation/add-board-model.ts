import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation createBoard($board_name: String!, $board_kind: BoardKind!) {
    create_board(board_name: $board_name, board_kind: $board_kind) {
      id
    }
  }
`;
