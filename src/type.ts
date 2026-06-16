type Skill = {
  image: string;
  title: string;
};

type LiveProject = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export type Data = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone: string;
  experience: string;
  projects: string;
  location: string;
  skills: Skill[];
  liveProjects: LiveProject[];
};
