import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/astronaut.png";
import celebrating from "../../assets/celebrating.png";
import education from "../../assets/education.png";
import taken from "../../assets/taken.png";
import retro from "../../assets/retro.png";
import retro2 from "../../assets/retro2.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [retro, retro2, education, taken];

const Projects = () => {

  const { t } = useTranslation();
  
  const [selected, setSelected] = useState("")

  const renderProjects = () => {
    
  }
  
  return (
    <Styled.BoxProjects>

      <Styled.NavContainer>
        <Styled.Title>
          Projects
        </Styled.Title>

        <Styled.TitleContainer>

          <Styled.NavTitle
          onClick={() => setSelected("apartamentoClassico")}
          >
            Apartamento Classico

            {console.log(selected)}
          </Styled.NavTitle>

          <Styled.NavTitle 
          onClick={() => setSelected("apartamentoClean")}
          >
            Apartamento Clean
          </Styled.NavTitle>
          <Styled.NavTitle 
          onClick={() => setSelected("blackBurger")}
          >
            Black Burguer Café
          </Styled.NavTitle>
          <Styled.NavTitle
          onClick={() => setSelected("cafeBar")}
          >
            Café bar anos 70
          </Styled.NavTitle>
          <Styled.NavTitle
          onClick={() => setSelected("casaRetro")}
          >
            Casa retrô
          </Styled.NavTitle>

        </Styled.TitleContainer>
      </Styled.NavContainer>

      <Styled.ProjectContainer>
        <Styled.DescriptionContainer>
          <Styled.ProjectTitle>
            {t("projetos.apartamentoRetro.title")}
          </Styled.ProjectTitle>

          <Styled.Description>
            {t("projetos.apartamentoRetro.description")}
          </Styled.Description>
        </Styled.DescriptionContainer>

      </Styled.ProjectContainer>

    </Styled.BoxProjects>
  );
};

export default Projects;
