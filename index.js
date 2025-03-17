const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    fs.readdir('./files', (err, files) => {
        res.render("index", { files: files })
    })
})

app.post("/create", (req, res) => {
    const { title, details, additional } = req.body
    const filename = title.split(' ').join('') + '.txt';
    const content = `${details}\n${additional}`
    fs.writeFile(`./files/${filename}`, content, (err) => {
        if (err) console.log(`Error: ${err}`);
        else res.redirect("/");
    });

})
app.get("/files/:file", (req, res) => {
    fs.readFile(`./files/${req.params.file}`, 'utf-8',(err, filedata)=>{
        res.render("show", { filename: req.params.file, data: filedata })
        
    })
})


app.listen(3000)




