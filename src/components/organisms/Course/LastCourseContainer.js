import React from "react";
import {CourseIcon} from "../../atoms/Icons/CourseIcon";
import styled from "styled-components";
import Heading from "../../atoms/Headings/Heading";
export const LastCourseWrapper = styled.div`
      height: auto;
      width: 33.3%;
      display: flex;
      border-radius: 10px;
      background-color: ${({theme}) => theme.app_background};
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
      position: relative;
      align-items: center;
      cursor: pointer;
      margin-right: 1.5rem;
    
      &:hover::before {
        background-color: ${({theme}) => theme.app_blue_light};
      }
    
      &::before {
         content: '';
         height: 100%;
         width: 86%;
         border-radius: 10px;
         background-color: ${({theme}) => theme.app_gray};
         transition: background-color .2s;
         display: flex;
         position: absolute;
         margin-top: -0.9rem;
         margin-left: 7%;
         z-index: -1;
      }
`;

const LastCourseContent = styled.div`
      height: 90%;
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 5%;
`;

const LastCourseIcon = styled.div`
      height: 6rem;
      width: auto;
      margin-left: 7%;
`;

const CourseNameContainer = styled.div`
      width: 100%;
      display: flex;
`;

const CourseDateContainer = styled.div`
      width: 100%;
      display: flex;
      color: ${({theme}) => theme.app_text_gray};
      font-size: ${({theme}) => theme.fontSize.s};
    
    span{
        font-weight: ${({theme}) => theme.fontWeight.semiBold};
        margin-left: 0.5rem;
    }
`;


const LastCourseContainer = () => {

    return (
        <LastCourseWrapper>
            <LastCourseIcon>
                {CourseIcon()}
            </LastCourseIcon>
            <LastCourseContent>
                <CourseNameContainer>
                    <Heading>Nazwa kursu</Heading>
                </CourseNameContainer>
                <CourseDateContainer>
                    Ostatnio edytowany: <span>28.03.2020</span>
                </CourseDateContainer>
            </LastCourseContent>
        </LastCourseWrapper>
    )
};

export default LastCourseContainer;