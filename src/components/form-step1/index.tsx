import * as S from "./styles";
import { MyComponentProps } from "../../views/studentSubscription/type";
import { Formik, Field, Form, validateYupSchema } from "formik";
import * as yup from "yup";

export const StepOne: React.FC<MyComponentProps> = ({ next, data }) => {
  const handleSubmit = (values: any) => {
    next(values);
  };

  return (
    <Formik
      initialValues={{
        nomeCompleto: "",
        sexo: "",
        dataNasc: "",
        numeroTelefone: "",
        email: "",
        codigoDocumento: "",
        tipoIdentificacao: "",
      }}
      validationSchema={yup.object({
        nomeCompleto: yup
          .string()
          .min(8, "O nome completo deve ter pelo menos 8 caracteres")
          .required("O nome completo é obrigatório"),
        sexo: yup
          .string()
          .min(1, "Selecione o campo")
          .required("O sexo é obrigatório"),
        dataNasc: yup
          .string()
          .min(1, "Selecione o campo")
          .required("A data de nascimento é obrigatório"),
        numeroTelefone: yup
          .string()
          .matches(
            /^\9[1-9]\d{7}$/,
            "Por favor, digite um número de telefone válido de Angola"
          )
          .required("Número de telefone é obrigatório"),
        email: yup
          .string()
          .email("Digite um email valido")
          .required("O email é obrigatorio"),
        tipoIdentificacao: yup
          .string()
          .min(1, "O campo é obrigatório")
          .required(),
        codigoDocumento: yup
          .string()
          .min(5, "Degite um código de documento válido")
          .required(),
      })}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <S.FormCard>
            <S.Paragraph>DADOS PESSOAIS</S.Paragraph>
            <S.FormContainer>
              <Field
                type="text"
                name="nomeCompleto"
                placeholder="Nome completo"
              />
              {formik.touched.nomeCompleto && formik.errors.nomeCompleto ? (
                <S.ErrorMessage>{formik.errors.nomeCompleto}</S.ErrorMessage>
              ) : null}

              <Field name="sexo" id="sexo" component="select">
                <option>Genero</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </Field>
              {formik.touched.sexo && formik.errors.sexo ? (
                <S.ErrorMessage>{formik.errors.sexo}</S.ErrorMessage>
              ) : null}

              <Field
                placeholder="Data de nascimento"
                type="date"
                name="dataNasc"
                min="2007-04-01"
              />
              {formik.touched.dataNasc && formik.errors.dataNasc ? (
                <S.ErrorMessage>{formik.errors.dataNasc}</S.ErrorMessage>
              ) : null}

              <Field
                placeholder="O seu numero de telefone"
                type="number"
                name="numeroTelefone"
              />
              {formik.touched.numeroTelefone && formik.errors.numeroTelefone ? (
                <S.ErrorMessage>{formik.errors.numeroTelefone}</S.ErrorMessage>
              ) : null}

              <Field placeholder="O seu email" type="email" name="email" />
              {formik.touched.email && formik.errors.email ? (
                <S.ErrorMessage>{formik.errors.email}</S.ErrorMessage>
              ) : null}

              <Field
                name="tipoIdentificacao"
                id="tipoIdentificacao"
                component="select"
              >
                <option>Tipo de indetificação</option>
                <option value="Bilhete_de_Identidade">
                  Bilhete de Identidade
                </option>
                <option value="Cedula_Pessoal">Cedula Pessoal</option>
                <option value="Passaporte_Ordinario">
                  Passaporte Ordinario
                </option>
              </Field>
              {formik.touched.tipoIdentificacao &&
              formik.errors.tipoIdentificacao ? (
                <S.ErrorMessage>
                  {formik.errors.tipoIdentificacao}
                </S.ErrorMessage>
              ) : null}

              <Field
                placeholder="Código do documento"
                type="text"
                name="codigoDocumento"
              />
              {formik.touched.codigoDocumento &&
              formik.errors.codigoDocumento ? (
                <S.ErrorMessage>{formik.errors.codigoDocumento}</S.ErrorMessage>
              ) : null}
              <button type="submit">CONTINUAR</button>
            </S.FormContainer>
          </S.FormCard>
        </Form>
      )}
    </Formik>
  );
};
