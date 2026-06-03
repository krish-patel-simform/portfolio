import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Data } from "../type";

const defaultdata: Data = {
  firstName: "",
  lastName: "",
  email: "",
  experience: "",
  location: "",
  phone: "",
  projects: "",
  role: "",
  skills: [
    {
      image: "",
      title: "",
    },
  ],
  liveProjects: [
    {
      title: "",
      description: "",
      link: "",
      image: "",
    },
  ],
};

const DataContext = createContext<Data>(defaultdata);

export default function DataContextProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState(defaultdata);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  return <DataContext value={data}>{children}</DataContext>;
}
export { DataContext };
