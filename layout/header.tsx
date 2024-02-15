import { Box, Button, Link, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const options = [
  {
    title: "Jordan",
    link: "Jordan",
  },
  {
    title: "Dunk",
    link: "Dunk",
  },
  {
    title: "Air Force 1",
    link: "Air+Force+1",
  },
];

function Header() {
  const [typeInput, setTypeInput] = useState("");
  const [skuInput, setSkuInput] = useState("");
  const router = useRouter();

  function handleChangeTypeInput(e: any) {
    setTypeInput(e.target.value);
  }

  function handleSubmitTypeInput() {
    router.push(`/${typeInput}`);
  }

  function handleChangeSkuInput(e: any) {
    setSkuInput(e.target.value);
  }

  function handleSubmitSkuInput() {
    router.push(`/${skuInput}`);
  }
  console.log(typeInput);
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        padding: "6px 8px",
        backgroundColor: "#ccc",
      }}
    >
      <Stack
        flexDirection={"row"}
        alignItems={"cecnter"}
        gap={"20px"}
        sx={{
          textTransform: "uppercase",
        }}
      >
        {
            options.map(
                (item: any, index: number) => {
                    return <Link href={`${item.link}`} key={index} sx={{
                        textDecoration: 'none'
                    }}>
                        {item.title}
                    </Link >
                }
            )
        }
        {/* <Box>Jordan</Box>
        <Box>Dunk</Box>
        <Box>Air force 1</Box> */}
      </Stack>

      <Stack flexDirection={"row"} alignItems={"center"} gap={"10px"}>
        <input
          onChange={handleChangeTypeInput}
          placeholder="Search type ..."
          style={{
            padding: "4px 6px",
            borderRadius: "8px",
            width: "500px",
          }}
        />
        <Button
          onClick={handleSubmitTypeInput}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            "&:hover": {
              opacity: 0.7,
              backgroundColor: "#fff",
            },
          }}
        >
          Search
        </Button>
      </Stack>

      <Stack flexDirection={"row"} alignItems={"center"} gap={"10px"}>
        <input
          onChange={handleChangeSkuInput}
          placeholder="Search sku ..."
          style={{
            padding: "4px 6px",
            borderRadius: "8px",
          }}
        />
        <Button
          onClick={handleSubmitSkuInput}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            "&:hover": {
              opacity: 0.7,
              backgroundColor: "#fff",
            },
          }}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
}

export default Header;
