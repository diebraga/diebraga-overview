import React from "react";
import { motion } from "framer-motion";
import AliceCarousel from "react-alice-carousel";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="xs:w-[350px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full bg-gradient-to-r from-blue-500 to-pink-500 p-[1px] rounded-[20px] float-left mr-10 mb-10"
        style={{ position: "relative" }}
      >
        <div className="bg-black rounded-[20px] min-h-[360px] px-5 py-4">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here you can see some of my little projects I created for fun using my
          favourite techs during my free time. 😊😊😊
        </motion.p>
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-center">
        <AliceCarousel
          items={projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
          autoPlay
          infinite
          autoPlayInterval={8000}
          responsive={{
            0: { items: 2 },
            768: { items: 3 },
            1024: { items: 3 },
          }}
          disableAutoPlayOnAction={true}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
