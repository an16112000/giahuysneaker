import axios from "axios";

const soldoutInstance = axios.create({
  headers: {
    Appkey: "JAkSzosy4X7K2FvPBwut5GN0At8DFuIwdhfs1dvr",
    // Host: "www.soldout.co.kr",
  },
});

export { soldoutInstance };
