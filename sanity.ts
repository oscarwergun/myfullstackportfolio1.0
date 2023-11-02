import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2022-12-14",
  useCdn: process.env.NODE_ENV === "production",
};

//* set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

//*helper function to get images
const builder = ImageUrlBuilder(config);
export const urlFor = (source: any) => builder.image(source);

