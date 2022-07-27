// FS moduli file system yani fayl papka yaratishga yordam beradi
const fs = require("fs"); 
const path = require("path")


// papka yaratish
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if(err) throw err
//     console.log("Papka yaratdik");
// })


// file yaratish

// fs.writeFile(path.join(__dirname, "test", "index.html"), "Hello Tashkent", (err) => {
//     if(err) throw err
//     console.log("Fayl yaratdik");
// })



// bu faylni ichiga yozilgan textga yana text quwadi
// fs.appendFile(path.join(__dirname, "test", "shaxa.html"), "- Rayon sergeli", (err) => {
//     if(err) throw err;
//     console.log("Faylni ichiga text quwdik");
// })


// Fayllani uqiw
// fs.readFile(path.join(__dirname, "test", "index.html"), "utf-8", (err, data) => {
//     if(err) throw err

//     // console.log(Buffer.from(data).toString());
//     console.log(data);
// })



// papkani yoki faylni nomini uzgartirish
// fs.rename(
//     path.join(__dirname, "test", "index.html"),
//     path.join(__dirname, "test", "shaxa.html"),
//     (err) => {
//         if(err) throw err
//         console.log("Faylni nomini uzgartirdik");
//     }
// )



// bittada 3 ta narsani qilish  / mana bu callback hell function

// fs.writeFile(path.join(__dirname, "test", "index.html"), "Hello Tashkent", (err) => {
//     if(err) throw err
//     console.log("Fayl yaratdik");
//     fs.appendFile(path.join(__dirname, "test", "index.html"), "- Rayon sergeli", (err) => {
//         if(err) throw err;
//         console.log("Faylni ichiga text quwdik");
//     })
//     fs.readFile(path.join(__dirname, "test", "index.html"), "utf-8", (err, data) => {
//         if(err) throw err
    
//         console.log(data);
//     })
// })



// fayl uchirish / mana werda bu sinxron iwlepti tipadegidan oldin
// fs.unlink(path.join(__dirname, "test", "index.html"), (err) => {
//     if(err) throw err
//     console.log("index.html faylini uchirdik");
// })



// Modul OS
// const os = require("os")

// kompyuterni qanaqa platformadaligini aniqlash
// console.log(os.platform());


// bu endi arxitekturasi
// console.log(os.arch());



// bu endi uwa kompimizni danniylarini kursatib beradi 
// batafsil informatsiya
// console.log(os.cpus());




// kompimizda qancha bush joy bor 
// console.log(os.freemem());




// kompimizni opwiy joyini kurish
// console.log(os.totalmem());




// asosiy directory qayerda  yani zagruzkalar qerga tuwadi
// console.log(os.homedir());



// kompim qancha vaxtdan beri iwlepti 
// console.log(os.uptime());  bu sekunda chiqaradi nicchi sekunddan beri iwlekkanini kompimizni






// ========= HTTP moduli SERVER

const http = require("http");

// 1
// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     response.write("<h1>Salom node.js</h1>")
//     response.end(
//         `<div style="width: 200px; height: 200px; background: blue">Text</div>`
//     )
// })


// 2
// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     response.writeHead(200, {"Content-Type": "text/html; utf-8"})
//     response.write("<b>Assalomu alaykum</b>")
//     response.end(
//         `<div style="width: 200px; height: 200px; background: blue">Text</div>`
//     )
// })

// 3
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; utf-8"})
    fs.readFile(path.join(__dirname, "test", "index.html"), (err, data) => {
        if(err) throw err;
        res.end(data)
    })
})


server.listen(5000, () => {     
    console.log("Severimizni 5000 localhostda kutardik");
})

