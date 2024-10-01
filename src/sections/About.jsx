import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useMediaQuery } from "react-responsive";

const About = () => {
  // const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1024 });
  return (
    <div className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* 1 card  */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex  justify-evenly ">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Nilesh</p>
              <p>
                I’ve been immersed in programming for three years, and during
                the past year, I've embraced my journey as a full-stack MERN
                developer. I love exploring new technologies and I am constantly
                learning to enhance my skills. My passion for coding fuels my
                curiosity, and I find joy in creating innovative solutions while
                diving into the ever-evolving tech world.
              </p>
            </div>
          </div>
        </div>

        {/* 2 card  */}

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex  justify-evenly ">
            <img
              src="/customImages/3.jpg"
              alt="grid-1"
              className="w-full h-fit"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p>
              "I am a MERN developer with expertise in full-stack frameworks like Next.js and proficiency in TypeScript. My experience encompasses building dynamic and scalable web applications using MongoDB, Express.js, React, and Node.js. In addition, I am skilled in Java and React Native, enabling me to develop cross-platform mobile applications. Currently, I am expanding my skill set by learning Three.js, aiming to enhance my ability to create immersive 3D experiences in web applications."
              </p>
            </div>
          </div>
        </div>

        {/* 3 card  */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container flex justify-evenly">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showGraticules
                showAtmosphere
                htmlLat="22"
                htmlLong="77"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>

            <div>
              <p className="grid-headtext">
                I work remotely across most time zones
              </p>
              <p>
                I enjoy working remotely, as it allows me to balance my
                professional responsibilities with my studies and college
                commitments. This flexibility enables me to manage my time
                effectively, ensuring that I can dedicate the necessary
                attention to both my work and academic pursuits. The ability to
                work from anywhere enhances my productivity and supports my
                growth as a student and developer.
              </p>
            </div>
          </div>
        </div>

        {/* 4 */}

        <div className=" xl:row-span-3 xl:col-span-2 ">
          <div className="grid-container flex  justify-evenly ">
            <img
              src="/assets/grid3.png"
              alt="grid-1"
              className="w-full sm:h[276px] mt-10  h-fit object-contain"
            />

            <div className="">
              <p className="grid-headtext">My Passion for Coding</p>
              <p>
                My passion for coding lies in the joy of creating and building
                innovative solutions. I thrive on transforming ideas into
                tangible applications and enjoy the challenge of tackling
                complex problems. Through coding, I find a unique avenue for
                creativity, allowing me to develop projects that make a
                meaningful impact.
              </p>

              
            </div>
          </div>
        </div>

        {/* 5*/}

        <div className={`  xl:row-span-3 xl:col-span-1 `}>
          <div className="grid-container flex  justify-evenly  ">
            <img
              src="/customImages/dsa.png"
              alt="grid-1"
              className="h-28 w-28 self-center"
            />

            <div className="">
              <p className="grid-headtext">DSA</p>
              <p>
                I have solved over 250 DSA problems on platforms like LeetCode,
                Coding Ninjas, and GeeksforGeeks, gaining a strong understanding
                of data structures such as Graphs, Trees, and HashMaps. My
                experience with Dynamic Programming, Greedy Algorithms, and
                Recursion has sharpened my problem-solving skills, enabling me
                to tackle complex coding challenges efficiently.
              </p>
              <span className="flex justify-center items-center">
                <a href="https://codolio.com/profile/Nilesh__" target="_blank">
                  <Button name="My Stats" isBeam containerClass="mt-10 " />
                </a>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
