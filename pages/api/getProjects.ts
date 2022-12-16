import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

//* we have technologies that are reference in project query so we can. expand our groq query
const query = groq`
    *[_type=="project"] {
      ...,
      technologies[]->
    }
`;
type DATA = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DATA>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
