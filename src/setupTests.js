// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Tanner 🌬️🔥',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

// 🚨 Create your server
const server = setupServer(
  rest.get('https://uzgiamkrbapxufnwdrja.supabase.co/rest/v1/users?select=*', (req, res, ctx) => {
    return res(ctx.json([user]))
  })
  // rest.get('put link with id here', (req, res, ctx) => {
  //   const { id } = req.params
  //     return res(ctx.json('user'))
  //   })
)

// describe('app', () => {
// })

// 🚨 Listen for server start
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
// 🚨 Close server when complete
afterAll(() => server.close())
