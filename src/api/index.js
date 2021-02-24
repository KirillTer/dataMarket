import request from 'superagent'

const baseURL = 'https://localhost:4000'

// export const fetchMainApi = async () => {
//   const {body} = await request.post(
//     `${baseURL}/api/teams`
//   )
//   console.log('main API - ', body.data)
//   return body.data
// }

export const searchApi = async (id) => {
  console.log('searchApi', id)
  const {body} = await request.post(
    `${baseURL}/api/search`
  ).send(id)
  console.log('players API - ', body.data)
  return body.data
}

// export const fetchGamesApi = async (id) => {
//   const {body} = await request.post(
//     `${baseURL}/api/teams/games`
//   ).send({ team_one_id: id})
//   console.log('games API - ', body.data)
//   return body.data
// }