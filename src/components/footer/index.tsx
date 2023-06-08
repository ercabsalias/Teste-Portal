import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import * as S from "./styles";

export const Footer = () => {
  return (
    <>
      <S.Container>
        <S.FooterInformations>
          <S.InfoContainer>
            <S.PortalSocialMedia>
              <Image
                src="https://i.ibb.co/R2T7Y84/med.png"
                width={290}
                height={50}
                alt="logo"
              />
              <p>
                MED busca promover ensino de qualidade para nosso país. Com o
                lançamento do Plano de Desenvolvimento da Educação
              </p>
              <div>
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
                <FaInstagram />
              </div>
            </S.PortalSocialMedia>
            <S.GateMed>
              <h2>Portal MED</h2>
              <a href="">Fale Conosco</a>
              <a href="">Ajuda</a>
              <a href="">Feedback</a>
              <a href="">Politica de cookies</a>
            </S.GateMed>
            <S.Resources>
              <h2>Social</h2>
              <a href="">Facebook</a>
              <a href="">Linkedin</a>
              <a href="">Twitter</a>
              <a href="">Whatsapp</a>
            </S.Resources>
            <S.Suport>
              <h2>Resources</h2>
              <a href="">Blog</a>
              <a href="">NewsLetter</a>
              <a href="">Eventos</a>
              <a href="">suporte</a>
            </S.Suport>
          </S.InfoContainer>
        </S.FooterInformations>
      </S.Container>
      <S.DirectoReserve>
        <Image
          src="https://i.ibb.co/R2T7Y84/med.png"
          width={170}
          height={30}
          alt="med"
        />
        <p>Todos os directo reservado</p>
      </S.DirectoReserve>
    </>
  );
};
