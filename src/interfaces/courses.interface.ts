export interface CoursesType {
  label: string;
  image: {
    id: string;
    url: string;
  };
  slug: string;
}

export interface ICourse {
  image: {
    url: string;
  };
  info: string;
  label: string;
  prerequist: string[];
  results: string[];
  videos: {
    slug: string;
    title: string;
    video: {
      url: string;
    }[];
  }[];
}

export interface IVideo {
  slug: string;
  title: string;
  video: {
    url: string;
  }[];
}

export interface CourseData {
  course: {
    videos: IVideo[];
  };
}
