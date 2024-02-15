import { useEffect, useState } from "react";
import LayoutDefault from "../../layout/layout"
import { useRouter } from "next/router";
import { getDataFromSoldOut } from "./api/getDataFromSoldOut";

function MenuSneaker() {
    const router = useRouter();
    const type = router.query.type as string
    const [listSneaker, setListSneaker] = useState([])
    useEffect(
        () => {
            async function fetchData() {
                const result = await getDataFromSoldOut(type)
                console.log(result)
            }
            fetchData()
        }, [type]
    )
    return <LayoutDefault>

    </LayoutDefault>;
}

export default MenuSneaker 