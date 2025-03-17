const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { render } = require('ejs');


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
    fs.readFile(`./files/${req.params.file}`, 'utf-8', (err, filedata) => {
        if (err) return res.status(500).send("File not found!");
        else res.render("show", { filename: req.params.file, details: filedata.split('\n')[0], additionaldetails: filedata.split('\n')[1] })
    })
})

app.get('/edit/:filename', (req, res) => {
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`, 'utf8', (err, data) => {
        if (err) return res.status(500).send("File not found!");
        res.render('editForm', { filename:req.params.filename, details: data.split('\n')[0], additionaldetails: data.split('\n')[1] })
    })
    
});
app.post('/update/:filename', (req, res) => {
    const { title, details, additional } = req.body;
    const oldFilename = req.params.filename;
    const newFilename = title.split(' ').join('') + '.txt';
    const content = `${details}\n${additional}`;

    fs.rename(`./files/${oldFilename}`, `./files/${newFilename}`, (err) => {
        if (err) console.log("Rename error:", err);
        fs.writeFile(`./files/${newFilename}`, content, (err) => {
            if (err) console.log("Write error:", err);
            res.redirect('/');
        });
    });
});


app.listen(3000)




