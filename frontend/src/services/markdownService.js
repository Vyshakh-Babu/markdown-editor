import axios from "axios";
import BASE_URL from "../config";

const convertMarkdown = async (markdownText) => {
	try {
		const response = await axios.post(`${BASE_URL}/api/v1/convert/`, { markdown: markdownText });
        console.log(response);
		return response.data.html;
	} catch (error) {
		console.error("Error converting Markdown:", error);
		throw error;
	}
};

export { convertMarkdown };
