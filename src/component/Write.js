import { useEffect, useState } from "react";

export default function Write() {
  const [listData, setListData] = useState([1, 2, 3]);

  useEffect(() => {
  })

  return (
    <>
      {listData.map(value => value.id)}
    </>
  )
}