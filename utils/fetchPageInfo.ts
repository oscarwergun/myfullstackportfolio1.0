import { pageInfo } from "../typings";

//? fetch the data from the backend
export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  //? type checking so we have correct type
  const pageInfo: pageInfo[] = data.pageInfo;

  //console.log("fetching", pageInfo);
  return pageInfo;
};
