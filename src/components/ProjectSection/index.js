import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, Button } from "antd";
import { getProjects } from "../../../util";
import moment from "moment";

const ProjectSection = ({ project }) => {
  const [projects, setProjects] = useState([]);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    getProjects()
      .then((res) => {
        console.log("here is res :", res);
        setProjects(res.result.projects);
      })
      .catch((err) => {
        console.log("here is err :", err);
      });
    if (typeof window !== "undefined") {
      const beforeParsing = JSON.parse(localStorage.getItem("userMetaData"));
      console.log("here is before parsing :", beforeParsing);
      /*             setUserInfo(beforeParsing.user)
       */
    }
  }, []);

  return (
    <div
      className={
        "bg-[#FAFAFA] shadow-xl ProjectSection mainSetting drop-shadow-xl flex flex-col gap-4 w-full sm:p-7  overflow-y-scroll rounded-md p-7 "
      }
    >
      <div className={"text-2xl font-bold "}>
        <span className={"text-textOrange font-bold"}>My</span> Projects
      </div>
      <div
        className={
          "flex flex-col  items-center gap-3 rounded-md justify-center w-full h-full"
        }
      >
        {projects ? (
          projects.map((project, index) => (
            <div
              key={index}
              className={
                "flex flex-row py-7 px-5 items-center rounded-lg justify-start w-full h-full bg-[#FBF4F2] gap-7"
              }
            >
              {/*<Image src={project.imageUrl} alt={""} width={100} height={100} className={" rounded-md"}/>*/}
              <div
                className={
                  "flex w-full flex-col text-black items-start gap-2 justify-center"
                }
              >
                <div className={"font-bold text-black text-lg"}>
                  Project title 1
                </div>
                <p className={"font-medium text-sm"}>
                  Amount invested: $ {project?.totalAmountInvested}{" "}
                </p>
                <div className="flex w-full flex-row gap-2">
                  {/* Replace these with actual icons and their labels */}
                  <Image
                    className={
                      "hover:scale-105 hover:duration-300 cursor-pointer"
                    }
                    src={"/Images/ProjectFeature01.svg"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                  <Image
                    className={
                      "hover:scale-105 hover:duration-300 cursor-pointer"
                    }
                    src={"/Images/ProjectFeature02.svg"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                  <Image
                    className={
                      "hover:scale-105 hover:duration-300 cursor-pointer"
                    }
                    src={"/Images/ProductFeature03.svg"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                  <Image
                    className={
                      "hover:scale-105 hover:duration-300 cursor-pointer"
                    }
                    src={"/Images/ProjectFeature04.svg"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                  {/*<div className="icon">5</div>*/}
                  {/*<div className="icon">10</div>*/}
                  {/*<div className="icon">15</div>*/}
                </div>
                <div
                  className={
                    "flex sm:max-h-64 overflow-y-scroll py-5 w-full  flex-col items-center justify-center gap-2"
                  }
                >
                  {userInfo?.amountInvested
                    .slice(0, 8)
                    .map((investment, index) => (
                      <div
                        key={index}
                        className={
                          "flex flex-row w-full h-full items-center justify-start gap-2 "
                        }
                      >
                        <Avatar src={"/Images/circle.svg"} size={20} />

                        <p key={index} className={"text-xs font-bold"}>
                          Amount Invested ${investment.amount}{" "}
                          <span className={"font-normal italic"}>
                            on {moment(investment.timestamp).format("DD/MM/YY")}
                          </span>
                        </p>
                      </div>
                    ))}
                </div>
                <p
                  className={
                    "text-sm font-bold text-textOrange  text-center  w-full"
                  }
                >
                  View Project Details
                </p>
              </div>
            </div>
          ))
        ) : (
          <div
            className={
              "flex flex-col w-full h-full py-20 items-center justify-center gap-5"
            }
          >
            <h1>You didn’t invest in any projects </h1>
            <Button className={"bg-button_border  text-white"} size={"large"}>
              Projects / Discover the universe
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
