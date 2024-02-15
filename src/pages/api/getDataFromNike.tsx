import axios from "axios";

async function getCloudProductIdFromNike(sku: string) {
  const result = await axios.get(
    `https://www.nike.com/gb/t/abc/${sku}`
  );
  var praser = new DOMParser();

  console.log(result);
  var document = praser.parseFromString(result.data, "text/html");
  console.log(document);
  var data = document.getElementById("__NEXT_DATA__") as any;
  const productId = JSON.parse(data.textContent).props.pageProps.initialState
    .Threads.products[`${sku}`].id;

  return productId;
}

async function getGtinFromNike(productId: string) {
  const response = await axios.post(
    "https://product-proxy-v2.adtech-prod.nikecloud.com/products",
    {
      country: "gb",
      experienceProducts: [
        {
          cloudProductId: productId,
        },
      ],
    }
  );
  const data = response.data.hydratedProducts[0].skuData;
  const currentPrice = response.data.hydratedProducts[0].currentPrice;
  const sizeChartAvailable = await checkAvailableSize();
  data.map(
    (shoes: any, index: number) => {
        const result = sizeChartAvailable.find(
          (size: any, index: number) => {
            return shoes.gtin == size.gtin
          }
        )
        console.log(result)
        const sizeAvailable = {
          size: shoes.size,
          available: result.available,
          sku: result.styleColor,
          price: currentPrice,
        };
        console.log(sizeAvailable)
    }
  )
  console.log("sizeChart:", sizeChartAvailable);
  console.log("data: ", data);
}

async function checkAvailableSize() {
  const response = await axios.get(
    "https://api.nike.com/deliver/available_gtins/v3?filter=styleColor(DV5456-105)&filter=merchGroup(EU)"
  );
  const data = response.data.objects;
  console.log(data);
  return data;
}

export { getCloudProductIdFromNike, getGtinFromNike, checkAvailableSize };
