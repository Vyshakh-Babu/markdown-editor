const express = require("express");
const bodyParser = require("body-parser");
const markdownRoutes = require('./routes/markdown.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use the markdown routes
app.use('/api/v1', markdownRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
