"use client";

import { useEffect, useState } from "react";

const HydrationTest = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const a = Math.random();
  console.log(a);

  return <div>{a}</div>;
};

export default HydrationTest;
