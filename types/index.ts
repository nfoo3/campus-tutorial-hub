export interface Resource {
  title: string;
  url: string;
  duration: string; // estimated watch time, e.g. "3 min"
}

export interface Category {
  id: string;
  name: string;
  description: string;
  resources: Resource[];
}
