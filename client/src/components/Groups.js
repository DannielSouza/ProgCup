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
        return (
          <table key={grupos[index]} className={style.tableContainer} border="0">
            <h3 className={style.groupTitle}>{grupos[index]}</h3>


            <tr className={style.headerContainer}>
              <td className={style.tableLineHeader}>Times</td>
              <td className={style.tableLineHeader}>Pontos</td>
              <td className={style.tableLineHeader}>Jogos</td>
              <td className={style.tableLineHeader}>Vitórias</td>
              <td className={style.tableLineHeader}>Empates</td>
              <td className={style.tableLineHeader}>Derrotas</td>
            </tr>

            {grupo.map((time) => {
              return (
                <tr key={time.nome} className={style.lineItem}>
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
