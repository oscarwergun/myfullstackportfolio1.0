import { Social } from "../typings";

//? fetch the data from the backend
export const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`
  );
  const data = await res.json();
  //? type checking so we have correct type
  const socials: Social[] = data.socials;

  //console.log("fetching", socials);
  return socials;
};
