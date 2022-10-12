import { useEffect, useState } from "react";
import { Regiao } from "../../@types/regioes";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listRegioes, setListRegioes] = useState<Regiao[]>([]);
    useEffect(() => {
        ApiService.get("/regiao/").then((response) => {
            setListRegioes(response.data);
        })
    }, []);

    return { 
        listRegioes
    }

}


