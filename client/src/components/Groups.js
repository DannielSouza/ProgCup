import React from "react";
import style from "../styles/Groups.module.css";

const Groups = ({ data }) => {
  const grupos = [
    "Grupo A",
    "Grupo B",
    "Grupo C",
    "Grupo D",
    "Grupo E",
    "Grupo F",
    "Grupo G",
    "Grupo H",
  ];

  return (
    <section className={style.groupContainer}>
      {data.map((grupo, index) => {
        console.log(grupo);
        return (
          <table className={style.tableContainer} border="1">
            <h3 className={style.groupTitle}>{grupos[index]}</h3>


            <tr className={style.headerContainer}>
              <td>Times</td>
              <td>Pontos</td>
              <td>Jogos</td>
              <td>Vitórias</td>
              <td>Empates</td>
              <td>Derrotas</td>
            </tr>

            {grupo.map((time) => {
              return (
                <tr>
                  <td className={style.teamNameAndPictureContainer}>
                    <img className={style.teamPicture} src={time.bandeira} alt={`Bandeira do ${time.nome}`} />{" "}
                    {time.nome}
                  </td>
                  <td className={style.tableCollumItem}>{time.resumo.pontos}</td>
                  <td className={style.tableCollumItem}>{time.resumo.jogos}</td>
                  <td className={style.tableCollumItem}>{time.resumo.vitorias}</td>
                  <td className={style.tableCollumItem}>{time.resumo.empates}</td>
                  <td className={style.tableCollumItem}>{time.resumo.derrotas}</td>
                </tr>
              );
            })}
          </table>
        );
      })}
    </section>
  );
};

export default Groups;
