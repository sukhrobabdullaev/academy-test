import { CoursesType, ICourse } from "@/interfaces/courses.interface";
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
};
