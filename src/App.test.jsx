// When in doubt check the docs!
// 🚨🚨 https://mswjs.io/docs/ 🚨🚨

import { screen, render } from '@testing-library/react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
// 🚨
// import rest
// import setupServer
import App from './App'

// const user = {
//   id: 1,
//   created_at: '2021-12-13T00:17:29+00:00',
//   name: 'Tanner 🌬️🔥',
//   avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
//   header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
//   likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
//   motto: 'Res Non Verba',
//   color: 'crimson',
// }

// // 🚨 Create your server
// const server = setupServer(
//   rest.get('https://uzgiamkrbapxufnwdrja.supabase.co/rest/v1/users?select=*', (req, res, ctx) => {
//     return res(ctx.json([user]))
//   })
//   // rest.get('put link with id here', (req, res, ctx) => {
//   //   const { id } = req.params
//   //     return res(ctx.json('user'))
//   //   })
// )

// // describe('app', () => {
// // })

// // 🚨 Listen for server start
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// // 🚨 Close server when complete
// afterAll(() => server.close())

test('Should render the header', async () => {
  render(<App />)
  // screen.debug()
  const loading = screen.getByText('Loading...')
  expect(loading).toBeInTheDocument()
  // screen.debug()
  const banner = await screen.findByRole('banner')
  const headerImg = await screen.findByAltText(/alchemy/i)
  const profileName = await screen.findByText('Tanner 🌬️🔥')

  expect(banner).toHaveStyle({
    background: 'var(--grey)',
  })
  expect(headerImg).toBeInTheDocument()
  expect(profileName).toBeInTheDocument()
})

test('Should render the header with Sasuke 🌬️🔥', async () => {
  const sasuke = {
    id: 1,
    created_at: '2021-12-13T00:17:29+00:00',
    name: 'Tanner 🌬️🔥',
    avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
    header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
    likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
    motto: 'Res Non Verba',
    color: 'crimson',
  }

  // 🚨 Use the server to change the response for this test

  render(<App />)

  const profileName = await screen.findByText(sasuke.name)

  expect(profileName).toBeInTheDocument()
})
