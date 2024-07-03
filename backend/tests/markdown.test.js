const { convertMarkdown } = require("../controllers/markdown.controller");

const mockReq = (body) => ({ body });
const mockRes = () => {
	const res = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	return res;
};

describe("Markdown Conversion", () => {
	it("converts Markdown to HTML", async () => {
		const markdownText = "# Hello, Sample test code";
		const expectedHtml = "<h1>Hello, Sample test code</h1>";

		// Mock request object with markdown text
		const req = mockReq({ markdown: markdownText });
		const res = mockRes();

		await convertMarkdown(req, res);
		expect(res.status).toBeCalledWith(200);

		const receivedHtml = res.json.mock.calls[0][0].html.trim();
		expect(receivedHtml).toBe(expectedHtml);
	});

	it("handles missing Markdown text", async () => {
		const req = mockReq({});
		const res = mockRes();

		await convertMarkdown(req, res);

		expect(res.status).toBeCalledWith(400);
		expect(res.json).toBeCalledWith({ error: "some markdown text is required" });
	});
});
