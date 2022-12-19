import { Experience } from "../typings";

//? fetch the data from the backend
export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperiences`
  );
  const data = await res.json();
  //? type checking so we have correct type
  const experiences: Experience[] = data.experiences;

  //console.log("fetching", experiences);
  return experiences;
};
