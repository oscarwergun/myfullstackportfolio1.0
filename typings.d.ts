interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
// create typings of social that are extended from sanity Body (that tends to have common in all )
export interface Social extends SanityBody {
  //?types in query that has differ from the body
  _type: "social";
  name: string;
  url: string;
}

export interface pageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInfo: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}
export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  name: string;
  progress: number;
}
export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  name: string;
  progress: number;
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  link: string;
  summary: string;
  technologies: Technology[];
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorking: boolean;
  title: string;
  details: string[];
  technologies: Technology[];
}
