const { marked } = require("marked");

const convertMarkdown = (req, res) => {
	const { markdown } = req.body;

	if (!markdown) {
		return res.status(400).json({ error: "Markdown text is required" });
	}

	// Converting Markdown to HTML using 'marked' library
	const html = marked(markdown);
    return res.status(200).json({ html });
};

module.exports = {
	convertMarkdown,
};
