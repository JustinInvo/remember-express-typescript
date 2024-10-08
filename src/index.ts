import express from 'express' // ESModules
// const express = require('express') // Commonjs

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('someone pinged gere!!')
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})