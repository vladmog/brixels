import {
    SET_BLOCKS
} from "./actions";
  
  const initialState = {
      blocks: []
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
  
      
      case SET_BLOCKS:
        return {
          ...state,
          blocks: action.payload
        };

  
      default:
        return state;
    }
  };