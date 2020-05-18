/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer } from "react";

class FetchState {
  static INIT = "INIT";
  static SUCCES = "SUCCES";
  static ERROR = "ERROR";
}

const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FetchState.INIT:
      state = { ...INITIAL_STATE, isLoading: true };
      break;
    case FetchState.SUCCES:
      state = { ...state, isLoading: false, data: payload };
      break;
    case FetchState.ERROR:
      state = { ...state, isLoading: false, error: payload };
      break;
    default:
      throw new Error(`Unknown action type: ${type}`);
  }

  return state;
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async () => {
      try {
        dispatch({ type: FetchState.INIT });
        const response = await fetch(url, { signal });

        if (response.ok) {
          const successData = await response.json();
          dispatch({ type: FetchState.SUCCES, payload: successData });
        } else {
          const errorData = await response.json();
          dispatch({ type: FetchState.ERROR, payload: errorData });
        }
      } catch (error) {
        dispatch({ type: FetchState.ERROR, payload: error });
        console.error(error);
      }
    };

    getData();

    return () => controller.abort();
  }, []);

  return state;
};

export default useFetch;
