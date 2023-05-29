import { api } from "../../../services/api";
import { ICandidate, IContact } from "../type";

export const postFetchCandidate = async (data: ICandidate) => {
  const candidate = await api.post("/candidate", data);

  return candidate.data;
};

export const postFetchContact = async (data: IContact) => {
  const contact = await api.post("/contact/post", data);
  return contact.data;
};

export const postFetchPhoto = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  console.log(formData);
  const photo = await api.post("/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return photo.data;
};

export const postFetchBiPdf = async (data: string) => {
  const biPdf = await api.post("/file", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return biPdf.data;
};

export const postFetchCertificatePdf = async (data: string) => {
  const certificatePdf = await api.post("/file", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return certificatePdf.data;
};

export const postFetchDeclarationPdf = async (data: string) => {
  const declarationPdf = await api.post("/file", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return declarationPdf.data;
};

export const getFetchGender = async () => {
  const gender = await api.get("/gender/list");
  return gender.data;
};
