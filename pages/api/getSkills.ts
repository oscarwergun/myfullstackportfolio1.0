import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

const query = groq`
    *[_type=="skill"]
`;
type DATA = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DATA>
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
