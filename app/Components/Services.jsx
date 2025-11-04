import React from "react";
import Commonhead from "./common/Commonhead";
import CommonService from "./common/CommonService";
import { FaUserGroup } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <section className="bg-black-bg pt-[150px]">
        <div className="container px-6 lg:px-0">
          <Commonhead
            head={"Services"}
            text={
              "Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam"
            }
          />

          <div className="flex items-center flex-wrap gap-10 justify-center mt-20">
            <CommonService
              icon={<FaUserGroup />}
              head={"App Design"}
              text={
                "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
              }
            />

            <CommonService
              icon={<FaUserGroup />}
              head={"App Design"}
              text={
                "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
              }
            />

            <CommonService
              icon={<FaUserGroup />}
              head={"App Design"}
              text={
                "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
              }
            />

            <CommonService
              icon={<FaUserGroup />}
              head={"App Design"}
              text={
                "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
              }
            />

            <CommonService
              icon={<FaUserGroup />}
              head={"App Design"}
              text={
                "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
              }
            />

            <CommonService
              icon={<FaUserGroup />}
              head={"App Design"}
              text={
                "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
