import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/lau-sarmiento",
            logo:logoGithub,
        },
        {
            name:"Linkedind",
            link:"https://www.linkedin.com/in/laura-melissa-sarmiento-montero-77b3b196",
            logo:logoLinkeind,
        },
        {
            name:"Youtube",
            link:"https://www.youtube.com/channel/UCexOmiMhr1JJHS162dL_OqA",
            logo:logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, i'm</p>
                        <p>Laura Sarmiento</p>
                        <p>Analista de Calidad</p>
                    </S.Title>
                    <S.DescriptionText>
                    Ing. de Sistemas, Politécnico Costa Atlántica, 
                    ejerciendo como Analista de Calidad,
                    con 2 años de experiencia en el sector tecnológico.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/Logo_LS.jpeg" alt="Laura Sarmiento - Analista de Calidad"/>
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;