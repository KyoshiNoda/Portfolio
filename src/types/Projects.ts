interface Projects {
  ScheduleFinder: object;
  Codingforall: object;
  ProsCons: object;
  SteamTime: object;
}

export type Project = {
  name: string;
  image: string;
  repo: string;
  demo?: string;
  description: string[];
  techStack: string[];
};

