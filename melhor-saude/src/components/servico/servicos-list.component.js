import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ServicoRequestService from '../../services/servico.service';

function ServicosList(){
  const [data, setData] = useState({ servicos: []});
  const [isLoading, setIsLoading] = useState(false);
    
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await ServicoRequestService.getAll();
      setData(data);
      setIsLoading(true);
      console.log(data);
    };
    fetchData();
  }, []);

  return(
    <div>
      { !isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
        <h5 className="text-center">Resultados Encontrados: {data.servicos.length}</h5>
          <ul>
            {data.servicos.map( (item) => {
              return (
                <Link key={item.id} to={"/servico/"+item.id}>
                  <li className="list-group-item list-group-item-primary rounded mb-1">
                    <img src={item.url} className="img-200 pr-3"/>{item.nome}
                  </li>
                </Link>
              )
            })}
          </ul>
        </>
        )
      }
    </div>
  )
}

export default ServicosList;