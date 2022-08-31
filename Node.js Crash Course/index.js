// const {sayHello,calculateVat} = require('./utils.js');

// sayHello()
    
// const vat7 = calculateVat(100,7)
// console.log(vat7 + '%')

// console.log(__filename,__dirname)

// // Path
// const path = require('path')
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
// console.log(path.join(__filename, 'utils.js'))

// //File System (fs)
// const fs = require('fs')
// // fs.writeFileSync(path.join(__dirname, 'data.txt'), 'Hello')
// // fs.writeFile(path.join(__dirname, 'data_1.txt'),'Hello',() =>{
// //     console.log('Finish!')
// // })

// // console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8'))

// //Operating System (os)
// // const os = require('os')
// // console.log(os.cpus())
// // console.log(os.homedir())
// // console.log(os.uptime())

// //Events (events)
// const events = require('events')
// const EventEmitter = events.EventEmitter
// const connect = new EventEmitter()

// connect.on('online', () =>{
//     console.log('A new user has connected')
// })

// connect.emit('online')
// connect.emit('online')
// connect.emit('online')
// connect.emit('online')
// connect.emit('online')

const path = require('path')
const fs = require('fs')
const http = require('http')
const moment = require('moment')

function getPage(page) {
    const filePath = path.join(__dirname, page)
    return fs.readFileSync(filePath)
}

function handleFiles(req,res){
    const fileType = path.extname(req.url) || '.html'
    if (fileType == '.html') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        if(req.url == '/'){
            res.write(getPage('index.html'))
        }else{
            res.write(getPage(`${req.url}.html`))
        }
        res.end()
    }else if(fileType == '.css'){
        res.setHeader('Content-Type', 'text/css')
        res.writeHead(200)
        res.write(getPage(req.url))
        res.end()
    }else{
        res.writeHead(404)
    }
    res.end()
   
}


function getData(url) {
    let data
    if(url == '/apis/users'){
        data = [{name: 'Dragon'},{name: 'Bob'},{name: 'Kan'}]
    }else if (url == '/apis/posts'){
        data = [{title: 'A',
        publishedDate: moment().startOf('day').fromNow()
    },{title: 'B',
    publishedDate: moment().startOf('day').fromNow()
    }
    ]}
    return data
}


function handleAPIs(req, res) {
    let data = getData(req, url)

    if(data){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(data))
    }else{
        res.writeHead(404)
    }
    res.end()
}


http.createServer((req,res)=>{
    if(req.url.startsWith('/apis/')){
        handleAPIs(req, res)
    }else{
        handleFiles(req, res)
    }
}).listen(3000)