import { useState } from "react";
import { Footer } from "../../components/footer";
import { SchoolCardSearch } from "../../components/SchoolCardSeach";
import { api } from "../../services";
import { schools } from "./mock";
import { RxTriangleDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import * as S from "./styles";
import * as P from "../School-Profile/styles";

type ISchool = [
  {
    nome: string;
    fotoUrl: string;
    id: string;
  }
];

export function SearchSchoolView({ data }: any) {
  const [search, setSearch] = useState("");
  const [schoolFilterData, setSchoolFilterData] = useState<ISchool[]>([]);

  async function handleSearc() {
    const data = await api.get(`/school/search`, {
      params: {
        search,
        limit: 6,
      },
    });
    setSchoolFilterData(data.data);
  }

  search ? handleSearc() : [];

  return (
    <>
      <S.Container>
        <S.Content>
          <S.FirstSection>
            <div>
              <select name="" id="">
                <option label="Filtrar por" value={undefined} />
                <option value="">Provincia</option>
                <option value="">Municipio</option>
              </select>
              <RxTriangleDown />
            </div>
            <section>
              <input
                type="search"
                name=""
                value={search}
                id=""
                placeholder="Pesquisar..."
                onChange={(e) => setSearch(e?.target.value)}
              />
              <CiSearch />
            </section>
          </S.FirstSection>
          <S.SecondSection>
            {search
              ? schoolFilterData?.map((school: any) => (
                  <SchoolCardSearch key={school.id} content={school} />
                ))
              : data?.map((school: any) => (
                  <SchoolCardSearch key={school.id} content={school} />
                ))}
          </S.SecondSection>
          <P.PageTable>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </P.PageTable>
        </S.Content>
      </S.Container>
    </>
  );
}
