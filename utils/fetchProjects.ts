import { Project } from "../typings";

//? fetch the data from the backend
export const fetchProject = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  //? type checking so we have correct type
  const projects: Project[] = data.projects;

  //console.log("fetching", projects);
  return projects;
};
