import express from "express"
import path from "path"
import cors from "cors"
import { createProxyMiddleware } from "http-proxy-middleware"

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors({ origin: process.env.SITE_URL || "http://localhost:3000" }))

app.get("/api", (req, res) => {
  res.json({ status: "active" })
})

if (process.env.NODE_ENV == "production") app.use("/", express.static(path.join(path.resolve(), "/dist")))
else app.use("/", createProxyMiddleware({ target: "http://localhost:8080/", ws: true }))

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
