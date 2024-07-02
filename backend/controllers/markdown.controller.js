const { marked } = require('marked');

const convertMarkdown = (req, res) => {
	const { markdown } = req.body;

	// Converting Markdown to HTML using 'marked' library
	const html = marked(markdown);
	res.json({ html });
};

module.exports = {
	convertMarkdown,
};
