import axios from "axios";
import { soldoutInstance } from "../../../utils/instance";

async function getDataFromSoldOut(type: string) {
  const response = await soldoutInstance.get(
    `https://www.soldout.co.kr/api/v3/search/get-item-list?&typeGb=goods&pageIndex=1&pageSize=12&keyword=${type}`
  );
  const data = response.data.data.product_info.list
  return data
}

export { getDataFromSoldOut };
