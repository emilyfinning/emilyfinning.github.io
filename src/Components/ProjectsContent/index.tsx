import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { createClient, EntryCollection } from "contentful";
import _ from "lodash";
import * as T from "../../../contentful/__generated__/types";
import Project from "./Project";
import "./styles.css";

interface Project {
  date: string;
  title: string;
  description: string;
  url: string;
}

type ContentType = T.IProject;

type ContentEntry<ID extends T.CONTENT_TYPE> = Pick<ContentType, "fields"> & {
  sys: {
    contentType: {
      sys: {
        id: ID;
      };
    };
  };
};

type ContentTypeID<CT extends ContentType = ContentType> =
  CT["sys"]["contentType"]["sys"]["id"];

type ContentEntryByID<ID extends T.CONTENT_TYPE> = Extract<
  ContentType,
  ContentEntry<ID>
>;

const ProjectsContent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  var contentfulClient = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_ACCESS_TOKEN!,
  });

  const getProjectEntry = async <
    CTID extends ContentTypeID,
    CE extends ContentEntryByID<CTID>
  >(
    contentTypeID: CTID
  ): Promise<EntryCollection<CE["fields"]>> => {
    return contentfulClient.getEntries({
      content_type: contentTypeID,
    });
  };

  const fillProjects = async () => {
    return await (
      await getProjectEntry("project")
    ).items.forEach((entry) => {
      const newProjects = _.cloneDeep(projects);
      newProjects.push({
        date: entry.fields.date!,
        title: entry.fields.title!,
        description: entry.fields.description!,
        url: entry.fields.url!,
      });
      setProjects(newProjects);
    });
  };

  useEffect(() => {
    fillProjects();
  }, []);

  return (
    <Box className="projects-container">
      <Box className="projects-header">
        <Typography variant="h1" className="projects-title">
          PROJECTS
        </Typography>
        <Box className="projects-line-detail" />
      </Box>
      <Box className="project-list-container">
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Project
              date={project.date}
              title={project.title}
              desc={project.description}
              githubUrl={project.url}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectsContent;
