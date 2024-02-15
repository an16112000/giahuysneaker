import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import {
  checkAvailableSize,
  getCloudProductIdFromNike,
  getGtinFromNike,
} from "./api/getDataFromNike";
import { getDataFromSoldOut } from "./api/getDataFromSoldOut";
import LayoutDefault from "../../layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dataMenu, setDataMenu] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // const productId = await getCloudProductIdFromNike("DV5456-105");
      // getGtinFromNike(productId);

      const result = await getDataFromSoldOut();
      setDataMenu(result);
    }
    fetchData();
  }, []);
  console.log(dataMenu);
  return <LayoutDefault></LayoutDefault>;
}
