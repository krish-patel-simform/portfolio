import type { IconComponent } from "reicon-react";
type ProjectCard = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export type ProjectCardProps = {
  project: ProjectCard;
};

export type ContactInfoCardProps = {
  title: string;
  content: string;
  Icon: IconComponent;
};
