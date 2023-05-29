import { api } from "../../../services"


const getSchools = async () => {
    const schools = await api.get("/school/list")
    return schools.data
}


export { getSchools }