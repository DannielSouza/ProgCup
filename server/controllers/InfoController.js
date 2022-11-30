const puppeteer = require("puppeteer");

module.exports = class InfoController {
  static async getMainInfo(req, res) {

    async function getTeamsInfo() {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto("https://www.terra.com.br/esportes/futebol/copa-2022/tabela/");
      
      /* GET ALL THE TEAMS AND CLEAR THE CODE */
      let collumsContainer = await page.$$eval('.col-main > table > tbody > tr', el => el.map(item => item.textContent))
      let collumsItems = collumsContainer.map(item=> item.replace("Subiu", "").replace("Desceu", ""))

      /* GET ALL THE TEAM'S FLAG */
      var flagsTeams = await page.$$eval('tr > .shield > a > .sports-shield', el => el.map(item => item.src))
      
      /* FUNCTION TO SEPARATE THE GROUPS */
      function array_chunk(arr, len) {
        let chunks = [], i = 0, n = arr.length
        while (i < n) {
          chunks.push(arr.slice(i, i += len))
        }
        return chunks
      }
      const pointsForGroup = array_chunk(collumsItems, 4)


      /* CREATE AN OBJECT FOR EACH TEAM WITH ITS DATAS */
      var flagTeamIndex = -1
      let teamsWithDatas = pointsForGroup.map(groups=>{
        return groups.map(teams=>{
          flagTeamIndex++
          return {
            bandeira: flagsTeams[flagTeamIndex],
            nome: teams.split("\n")[1].replace(" >>", ""),
            resumo: {
              pontos: teams.split("\n")[2].slice(0, 5)[0],
              jogos: teams.split("\n")[2].slice(0, 5)[1],
              vitorias: teams.split("\n")[2].slice(0, 5)[2],
              empates: teams.split("\n")[2].slice(0, 5)[3],
              derrotas: teams.split("\n")[2].slice(0, 5)[4],
            }
          }
          
        })
      })
      await browser.close();
      return teamsWithDatas
    }
    

    async function getBestPlayers(){
      const browser = await puppeteer.launch()
      const page = await browser.newPage()

      await page.goto('https://ge.globo.com/futebol/copa-do-mundo/2022/')
      await page.waitForSelector('.ranking-item-wrapper')

      const bestPlayers = await page.$$eval('.ranking-item-wrapper > .jogador', el => el.map(item=>{
        return {
          nome: item.innerText.split("\n")[0],
          posicao: item.innerText.split("\n")[1],
          gols: item.innerText.split("\n")[2],
          foto: item.innerHTML.split('src="')[1].split('"')[0], 
          selecao: item.innerHTML.split('src=\"')[2].split('"')[0]
        
        }
      }))

      await browser.close();
      return bestPlayers
    }
    const bestPlayers = await getBestPlayers()
    const teamsWithDatas = await getTeamsInfo()
    res.send({topPlayers: bestPlayers, topTeams: teamsWithDatas})




    /* THE SITE DELETED THIS PLACE IN THE WEBSITE */
    //async function getDailyGames(){
    //  const browser = await puppeteer.launch()
    //  const page = await browser.newPage()

    //  await page.goto("https://www.terra.com.br/esportes/futebol/copa-2022/tabela/");


    //  const gamesContainer = await page.$$eval('.zaz-app-t360-ticker--match--info', el => el.map(item=> item.innerText))
    //  const teamOneResult = await page.$eval('.team1', el => el.innerHTML)
    //  const teamTwoResult = await page.$eval('.team2', el => el.innerHTML)

      
    //  return teamTwoResult
    //}
    //const gamesTest = await getDailyGames()
    //res.json({gamesTest})
  }
};
