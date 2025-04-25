"use client";

import { FC, useEffect, useState } from "react";
import Loader from "./Loader";

const Preloader: FC = () => {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const hasComponentRendered: string | null =
      sessionStorage.getItem("loader");

    if (!hasComponentRendered as boolean) {
      setLoader(true);
      sessionStorage.setItem("loader", "true");
    }
  }, []);

  return <>{loader && <Loader />}</>;
};

export default Preloader;
