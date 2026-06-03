import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function useData() {
  const data = useContext(DataContext);
  return data;
}

export { useData };
