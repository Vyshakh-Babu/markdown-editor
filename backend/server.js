const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const markdownRoutes = require('./routes/markdown.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use the markdown routes
app.use('/api/v1', markdownRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
