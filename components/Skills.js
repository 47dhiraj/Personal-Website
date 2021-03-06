import React from "react";
import PublicImage from "./PublicImage";
import styled from "styled-components";

const skills = [
  "python",
  "django",
  "numpy",
  "pandas",
  "php",
  "laravel",
  "javascript",
  "react",
  "redux",
  "jquery",
  "web scraping",
  "html",
  "css",
  "mysql",
  "git",
  "github",
  "linux",
  "ubuntu",
  "vsc",
];
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  transition: width 0.5s;

  &:hover {
    width: 4rem;
    height: 4rem;
  }
`;
const Image = styled(PublicImage)``;

const Skills = () => {
  return (
    <Container>
      {skills.map((skill, index) => {
        return (
          <Item key={index}>
            <a
              href={`https://github.com/47dhiraj?tab=repositories&q=${skill}&type=&language=`}
              target="_blank"
            >
              <Image name={skill} alt={skill} />
            </a>
          </Item>
        );
      })}
    </Container>
  );
};
export default Skills;
