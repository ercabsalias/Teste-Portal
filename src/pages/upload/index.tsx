import { useFormik } from "formik";
import axios from "axios";
import { NextPage } from "next";
import { api } from "../../services";

interface Values {
  file: any;
}

const MyForm: NextPage = () => {
  const formik = useFormik<Values>({
    initialValues: { file: null },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("file", values.file[0]);

      const response = await api.post("/file", formData);
      console.log(response);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        name="file"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          formik.setFieldValue("file", event.currentTarget.files);
        }}
      />
      <button type="submit">Enviar arquivo</button>
    </form>
  );
};

export default MyForm;
