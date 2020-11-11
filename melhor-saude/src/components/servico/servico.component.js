import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router";

function ServicoDetalhes(){
    const [data, setData] = useState(new Servico());
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        let {id} = useParams();
        const fetchData = async () => {
          const {data} = await ServicoRequestService.get(id);
          setData(data);
          setIsLoading(true);
          console.log(data);
        };
        fetchData();
      }, []);
    return (
        <div>
        { isLoading ? 
            (
                <p>Carregando </p> 
            ) : (
                <div>Servico {data.nome}</div>
            )
        }
        </div>
    )


}

export default ServicoDetalhes;