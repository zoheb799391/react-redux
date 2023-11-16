import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from '../functioning/todos/Todoslice'
import { useDispatch, useSelector } from "react-redux";

const Store = configureStore({
    reducer : TodoSlice
})

// export const getAuthCurrentState = Store.getState;
// export const useAppDispatch = () => useDispatch();
// export const useAppSelector = useSelector;
export default Store;