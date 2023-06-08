import * as S from "./styles";
import {
  ICandidate,
  IContact,
  MyComponentProps,
} from "../../views/studentSubscription/type";
import { useRouter } from "next/router";
import { api, getCoursesSchool } from "../../services";
import useSWR from "swr";
import { toast } from "react-toastify";
import { ICourses, IErrorInterface } from "../form-step1/type";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Loading from "../loading";

export const StepTwo: React.FC<MyComponentProps> = ({
  next,
  data,
  setData,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    query: { escolaId },
  } = useRouter();

  const { data: courses, error: coursesError } = useSWR("courses", () =>
    getCoursesSchool(escolaId)
  );

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    console.log(data, values);
    try {
      const formData = new FormData();
      const formData2 = new FormData();
      const formData3 = new FormData();

      formData.append("file", values.photo[0]);
      formData2.append("file", values.pdfIdentificacao[0]);
      formData3.append("file", values.pdfCertificacaoEscolar[0]);

      const contactData: IContact = {
        numeroTelefone: data.numeroTelefone.toString(),
        email: data.email,
      };

      console.log(contactData);
      const [
        photoResponse,
        identificationResponse,
        certificationResponse,
        constactResponse,
      ] = await Promise.all([
        api.post("/file", formData),
        api.post("/file", formData2),
        api.post("/file", formData3),
        api.post("/contact/post", contactData),
      ]);
      console.log(constactResponse);

      const candidate: ICandidate = {
        nome: data.nomeCompleto,
        sexo: data.sexo,
        dataNasc: data.dataNasc,
        contatoId: constactResponse.data.id,
        photoUrl: photoResponse.data.id,
        tipoIdentificacao: data.tipoIdentificacao,
        codigoDocumento: data.codigoDocumento,
        pdfIdentificacao: identificationResponse.data.id,
        tipoCertificacaoEscolar: values.tipoCertificacaoEscolar,
        pdfCertificacaoEscolar: certificationResponse.data.id,
      };
      console.log(candidate);
      const resposeCandidate = await api.post("/candidate/post", candidate);
      console.log(resposeCandidate.data.id);

      const subscription = {
        escolaId: escolaId,
        candidatoId: resposeCandidate?.data?.id,
      };

      const responseSubscription = await api.post(
        "/enrollment/post",
        subscription
      );
      const intendedCourseData = {
        inscricaoId: responseSubscription.data.id,
        cursoId: values.cursoId,
      };
      if (responseSubscription) {
        const intendendCourseResponse = await api.post(
          "/intendedCourse/post",
          intendedCourseData
        );
        console.log(intendendCourseResponse);
        setIsLoading(false);
        toast("Cadastro feito com sucesso", {
          autoClose: 2000,
          type: "success",
        });
        next(data);
      }
    } catch (err) {
      const error = err as IErrorInterface;
      console.log(error.response);
      toast(error.response?.data.message, { autoClose: 2000, type: "error" });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <Formik
      initialValues={{
        tipoCertificacaoEscolar: "",
        cursoId: "",
        photo: null,
        pdfIdentificacao: null,
        pdfCertificacaoEscolar: null,
      }}
      validationSchema={yup.object({
        tipoCertificacaoEscolar: yup
          .string()
          .min(1, "preencha o campo")
          .required("campo obrigatório"),
        cursoId: yup
          .string()
          .min(1, "selecione o campo")
          .required("campo é obrigatório"),
        photo: yup
          .string()
          .min(1, "selecione o campo")
          .required("campo obrigatório"),
        pdfIdentificacao: yup
          .string()
          .min(1, "seleccione o campo")
          .required("campo obrigatório"),
        pdfCertificacaoEscolar: yup
          .string()
          .min(1, "seleccione o campo")
          .required("campo obrigatorio"),
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formik) => (
        <Form>
          <S.FormCard>
            <S.Paragraph>DADOS ESCOLARES</S.Paragraph>
            <S.FormContainer>
              <Field
                name="tipoCertificacaoEscolar"
                id="tipoCertificacaoEscolar"
                component="select"
              >
                <option>Tipo de certificação escolar</option>
                <option value="Declaracao_com_Notas">
                  Declaracao com Notas
                </option>
                <option value="Certificado_de_Habilitaoes">
                  Certificado de Habilitaoes
                </option>
              </Field>
              {formik.touched.tipoCertificacaoEscolar &&
              formik.errors.tipoCertificacaoEscolar ? (
                <S.ErrorMessage>
                  {formik.errors.tipoCertificacaoEscolar}
                </S.ErrorMessage>
              ) : null}

              <Field name="cursoId" id="curso" component="select">
                <option>Curso pretendido</option>
                {courses?.map((item: ICourses, index: number) => (
                  <option value={item?.id} key={index}>
                    {item?.nome}
                  </option>
                ))}
              </Field>
              {formik.touched.cursoId && formik.errors.cursoId ? (
                <S.ErrorMessage>{formik.errors.cursoId}</S.ErrorMessage>
              ) : null}

              <div>
                <div className="label">
                  <label htmlFor="photo">Selecione a Imagem...</label>
                </div>
                <input
                  id="photo"
                  accept="image/*"
                  type="file"
                  name="photo"
                  onChange={(event) => {
                    formik.setFieldValue("photo", event.currentTarget.files);
                  }}
                />
                {formik.touched.photo && formik.errors.photo ? (
                  <S.ErrorMessage>{formik.errors.photo}</S.ErrorMessage>
                ) : null}
              </div>

              <div>
                <div className="label">
                  <label htmlFor="pdfIdentificacao">
                    Selecione o PDF da Identificação...
                  </label>
                </div>
                <input
                  id="pdfIdentificacao"
                  accept="application/pdf"
                  type="file"
                  name="pdfIdentificacao"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "pdfIdentificacao",
                      event.currentTarget.files
                    );
                  }}
                />
                {formik.touched.pdfIdentificacao &&
                formik.errors.pdfIdentificacao ? (
                  <S.ErrorMessage>
                    {formik.errors.pdfIdentificacao}
                  </S.ErrorMessage>
                ) : null}
              </div>

              <div>
                <div className="label">
                  <label htmlFor="pdfCertificacaoEscolar">
                    Selecione o PDF da Certificação Escolar...
                  </label>
                </div>
                <input
                  id="pdfCertificacaoEscolar"
                  accept="application/pdf"
                  type="file"
                  name="pdfCertificacaoEscolar"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "pdfCertificacaoEscolar",
                      event.currentTarget.files
                    );
                  }}
                />
                {formik.touched.pdfCertificacaoEscolar &&
                formik.errors.pdfCertificacaoEscolar ? (
                  <S.ErrorMessage>
                    {formik.errors.pdfCertificacaoEscolar}
                  </S.ErrorMessage>
                ) : null}
              </div>

              <button type="submit">CADASTRAR</button>
            </S.FormContainer>
          </S.FormCard>
        </Form>
      )}
    </Formik>
  );
};
