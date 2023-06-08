import * as S from "./styles";
import Image from "next/image";
import logoportal from "../../../public/assets/portalPNG.png";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <S.Wrapper>
      <S.MainContainer>
        <S.Content>
          <Image src={logoportal} width={150} height={170} alt="appLogo" />
          <S.ContentLeft>
            <S.Menu className="navbar">
              <li>
                <Link
                  href="/"
                  className={currentRoute === "/" ? "active" : "non-active"}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link href={"/SearchSchool"}>Escolas</Link>
              </li>
            </S.Menu>
            <S.MenuMobile onClick={() => setShowMenu(!showMenu)}>
              <div className="bars">
                <span>
                  <FaBars />
                </span>
              </div>
            </S.MenuMobile>
          </S.ContentLeft>
        </S.Content>
      </S.MainContainer>
      <S.MenuBar showMenu={showMenu}>
        <li>
          <Link
            href="#"
            className={currentRoute === "/" ? "active" : "non-active"}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link href={"/SearchSchool"}>Escolas</Link>
        </li>
      </S.MenuBar>
    </S.Wrapper>
  );
};

export default Header;
