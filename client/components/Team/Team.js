import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <Heading className="about__title">Meet the Developers:</Heading>
      <div className="about__container">
        <section className="about__card">
          <h2>Samuel Joh</h2>
          <div className="about__card-img">
            <img
              className="about-image"
              src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Sam"
            />
          </div>
          <div className="links">
            <Button colorScheme="teal" leftIcon={<BsLinkedin />}>
              <a
                href="https://www.linkedin.com/in/samuel-joh/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            &nbsp;&nbsp;
            <Button colorScheme="teal" leftIcon={<BsGithub />}>
              <a
                href="https://github.com/sem0701"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </section>

        <section className="about__card">
          <h2>Robert Berman</h2>
          <div className="about__card-img">
            <img
              className="about-image"
              src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Sam"
            />
          </div>
          <div className="links">
            <Button colorScheme="teal" leftIcon={<BsLinkedin />}>
              <a
                href="https://www.linkedin.com/in/sulaiman-marey-7435831b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            &nbsp;&nbsp;
            <Button colorScheme="teal" leftIcon={<BsGithub />}>
              <a
                href="https://github.com/sem0701"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </section>
        <section className="about__card">
          <h2>Veysel Basbaydar</h2>
          <div className="about__card-img">
            <img
              className="about-image"
              src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Sam"
            />
          </div>
          <div className="links">
            <Button colorScheme="teal" leftIcon={<BsLinkedin />}>
              <a
                href="https://www.linkedin.com/in/sulaiman-marey-7435831b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            &nbsp;&nbsp;
            <Button colorScheme="teal" leftIcon={<BsGithub />}>
              <a
                href="https://github.com/sem0701"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </section>
        <section className="about__card">
          <h2>Sulaiman Marey</h2>
          <div className="about__card-img">
            <img
              className="about-image"
              src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              alt="Sam"
            />
          </div>
          <div className="links">
            <Button colorScheme="teal" leftIcon={<BsLinkedin />}>
              <a
                href="https://www.linkedin.com/in/sulaiman-marey-7435831b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            &nbsp;&nbsp;
            <Button colorScheme="teal" leftIcon={<BsGithub />}>
              <a
                href="https://github.com/sem0701"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
