import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.setHeader('netlify-cdn-cache-control', 'public, s-maxage=86400, stale-while-revalidate')
  
  if (req.url === '/301') {
    res.statusCode = 301
    res.setHeader('location', 'https://www.netlify.com/')
  } else {
    res.write('hello')
  }
  
  res.end()
})

server.listen((3000))
