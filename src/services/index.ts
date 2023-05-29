import axios from "axios";

export const api = axios.create({
    baseURL: 'https://portal-das-escolas-api.onrender.com'
})

export const getSchools = async () => {
  const schools = await api.get("/school/list");
  return schools.data;
};

export const getSchool = async (id: string) => {
  const school = await api.get(`school/list/${id}`);

  return school.data;
};

export const getTrainingAreabyId = async (id: string) => {
  const area = await api.get(`/trainingArea/list/${id}`);
  return area.data;
};

export const getTrainingAreas = async () => {
  const area = await api.get(`/trainingArea/list`);
  return area.data;
};

export const getActivity = async (id: string) => {
  const actividade = await api.get(`/activity/list/${id}`);
  return actividade.data;
};

export const getActivitys = async () => {
  const actividade = await api.get(`/activity/list`);
  return actividade.data;
};

export const getOutputProfile = async (id: string) => {
  const outputProfile = await api.get(`/outputProfile/list/${id}`);
  return outputProfile.data;
};

export const getOutputProfiles = async () => {
  const outputProfile = await api.get(`/outputProfile/list`);
  return outputProfile.data;
};

export const getCourse = async (id: string) => {
  const course = await api.get(`/course/list/${id}`);
  return course.data;
};

export const getCoursesSchool = async (escolaId: string | any) => {
  const courses = await api.get(`/school/list/${escolaId}/courses`);
  return courses.data;
};

export const getCourses = async () => {
  const course = await api.get(`/course/list`);
  return course.data;
};

export const getSubject = async (id: string) => {
  const subject = await api.get(`/schoolSubject/list/${id}`);
  return subject.data;
};

export const getSubjects = async () => {
    const subject = await api.get(`/schoolSubject/list`)
    return subject.data
}
 
