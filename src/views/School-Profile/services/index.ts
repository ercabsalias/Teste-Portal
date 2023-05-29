import { api } from "../../../services";
import { ISchoolData } from "../../../types";


async function fetchData(school: ISchoolData) {
    const [schoolPhoto, logoPhoto, historial1, historial2, historial3, historial4] = await Promise.all([
        (await api.get(`/file/${school.fotoUrl}`)).data,
        (await api.get(`/file/${school.logo}`)).data,
        (await api.get(`/file/${school.fotoUrl}`)).data,
        (await api.get(`/file/${school.historial.fotoUrl}`)).data,
        (await api.get(`/file/${school.historial.fotoUrl2}`)).data,
        (await api.get(`/file/${school.historial.fotoUrl3}`)).data,
        (await api.get(`/file/${school.historial.fotoUrl4}`)).data,
    ]);


    return { schoolPhoto, logoPhoto, historial1, historial2, historial3, historial4 };
}

export { fetchData }