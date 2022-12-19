import { Skill } from "../typings";

//? fetch the data from the backend
export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`);
  const data = await res.json();
  //? type checking so we have correct type
  const skills: Skill[] = data.skills;

  //console.log("fetching", skills);
  return skills;
};
