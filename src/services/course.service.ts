import {
  CourseData,
  CoursesType,
  ICourse,
  IVideo,
} from "@/interfaces/courses.interface";
import { request, gql } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

export const CoursesService = {
  async getCourses() {
    const query = gql`
      query Courses {
        courses {
          label
          image {
            id
            url
          }
          slug
        }
      }
    `;

    const res = await request<{ courses: CoursesType[] }>(graphAPI, query);
    return res.courses;
  },
  async getDetailedCourse(slug: string) {
    const query = gql`
      query getDetailedCourse($slug: String!) {
        course(where: { slug: $slug }) {
          image {
            url
          }
          info
          label
          prerequist
          results
          videos {
            slug
            title
            video {
              url
            }
          }
        }
      }
    `;
    const slugName = {
      slug,
    };

    const res = await request<{ course: ICourse }>(graphAPI, query, slugName);
    return res.course;
  },
  async getDetailedCourseVidoes(slug: string) {
    const query = gql`
      query getDetailedCourse($slug: String!) {
        course(where: { slug: $slug }) {
          videos {
            description
            slug
            title
            video {
              url
            }
          }
        }
        viewer {
          project(id: "9ec37a5257454ed08cc77b934a34d343") {
            defaultPaginationSize
            maxPaginationSize
          }
        }
      }
    `;
    const slugName = {
      slug,
    };

    const res = await request<CourseData>(graphAPI, query, slugName);
    return res.course;
  },
  async getSingleVideo(slug: string) {
    const query = gql`
      query singleVideo($slug: String!) {
        video(where: { slug: $slug }) {
          description
          slug
          title
          video {
            url
          }
        }
      }
    `;
    const slugName = {
      slug,
    };

    const res = await request<{ video: IVideo }>(graphAPI, query, slugName);
    return res.video;
  },
};
