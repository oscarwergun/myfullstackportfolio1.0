import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { pageInfo } from "../../typings";

const query = groq`
    *[_type=="pageInfo"][0]
`;
type DATA = {
  pageInfo: pageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DATA>
) {
  try {
    const pageInfo: pageInfo = await sanityClient.fetch(query);
    if(!pageInfo) {
      throw new Error("HTTP error")
    }
  res.status(200).json({ pageInfo });
  }
  catch (error) {
    console.log("Error fetching data...", error)
  }
  
}
