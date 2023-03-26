const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING": {
      return {
        loading: true,
        data: [],
        err: false,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        loading: false,
        err: false,
        data: action.payload,
      };
    }
    case "FETCH_ERROR": {
      return {
        loading: false,
        err: true,
        data: [],
      };
    }

    default: {
      throw new Error(`Invalid Action Type`);
    }
  }
};

export { reducer };
