export const SET_BLOCKS = "SET_BLOCKS";

export const setBlocks = blocksArr => dispatch => {
  dispatch({ type: SET_BLOCKS, payload: blocksArr });
};
