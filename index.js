const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs').promises; // Use promises version for async/await
const fsSync = require('fs'); // Keep sync version for checking directories

// Configure Express
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Error handler middleware
const errorHandler = (err, _req, res, _next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).render('error', {
        error: err.message || 'Something went wrong!'
    });
};

// Home route - List all tasks
app.get("/", async (_req, res, next) => {
    try {
        // Make sure the files directory exists
        if (!fsSync.existsSync('./files')) {
            fsSync.mkdirSync('./files', { recursive: true });
        }

        const files = await fs.readdir('./files');
        res.render("index", { files });
    } catch (err) {
        next(err);
    }
});

// Create a new task
app.post("/create", async (req, res, next) => {
    try {
        const { title, details, additional } = req.body;

        // Validate input
        if (!title || !title.trim()) {
            return res.status(400).render('error', { error: "Title is required" });
        }

        const filename = title.split(' ').join('') + '.txt';
        const content = `${details || ''}\n${additional || ''}`;

        await fs.writeFile(`./files/${filename}`, content);
        res.redirect("/");
    } catch (err) {
        next(err);
    }
});
// View a task
app.get("/files/:file", async (req, res, next) => {
    try {
        const filedata = await fs.readFile(`./files/${req.params.file}`, 'utf-8');
        const parts = filedata.split('\n');

        res.render("show", {
            filename: req.params.file,
            details: parts[0] || '',
            additionaldetails: parts[1] || ''
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            return res.status(404).render('error', { error: "Task not found!" });
        }
        next(err);
    }
});

// Edit task form
app.get('/edit/:filename', async (req, res, next) => {
    try {
        const filename = req.params.filename;
        const data = await fs.readFile(`./files/${filename}`, 'utf8');
        const parts = data.split('\n');

        res.render('editForm', {
            filename: req.params.filename,
            details: parts[0] || '',
            additionaldetails: parts[1] || ''
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            return res.status(404).render('error', { error: "Task not found!" });
        }
        next(err);
    }
});

// Update a task
app.post('/update/:filename', async (req, res, next) => {
    try {
        const { title, details, additional } = req.body;
        const oldFilename = req.params.filename;

        // Validate input
        if (!title || !title.trim()) {
            return res.status(400).render('error', { error: "Title is required" });
        }

        const newFilename = title.split(' ').join('') + '.txt';
        const content = `${details || ''}\n${additional || ''}`;

        // If the filename changed, rename the file
        if (oldFilename !== newFilename) {
            try {
                await fs.rename(`./files/${oldFilename}`, `./files/${newFilename}`);
            } catch (err) {
                // If the file doesn't exist, just create a new one
                if (err.code !== 'ENOENT') throw err;
            }
        }

        // Write the updated content
        await fs.writeFile(`./files/${newFilename}`, content);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

// Delete a task
app.post('/delete/:filename', async (req, res, next) => {
    try {
        const filename = req.params.filename;
        await fs.unlink(`./files/${filename}`);
        res.redirect('/');
    } catch (err) {
        if (err.code === 'ENOENT') {
            // File already doesn't exist, just redirect
            return res.redirect('/');
        }
        next(err);
    }
});

// Register error handler middleware
app.use(errorHandler);

app.listen(3000, () => {
    console.log('NodeScribe app listening on port 3000!');
});
