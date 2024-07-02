import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { convertMarkdown } from "../services/markdownService";

const MarkdownEditor = () => {
	const [markdownText, setMarkdownText] = useState("");
	const [htmlOutput, setHtmlOutput] = useState("");

	const handleInputChange = async (e) => {
		const { value } = e.target;
		setMarkdownText(value);

		try {
			if (value.trim() === "") {
				// Clear output if textarea is empty
				setHtmlOutput("");
			} else {
				const convertedHtml = await convertMarkdown(value);
				setHtmlOutput(convertedHtml);
				// console.log("Converted", htmlOutput);
			}
		} catch (error) {
			console.error("Error converting Markdown:", error);
		}
	};

	return (
		<Container className="markdown-editor">
			<Row>
				<Col>
					<Form.Group controlId="markdownTextArea">
						<Form.Control
							as="textarea"
							value={markdownText}
							onChange={handleInputChange}
							placeholder="Enter Markdown here..."
							rows={10}
						/>
					</Form.Group>
				</Col>
				<Col>
					<div className="markdown-preview">
						<div dangerouslySetInnerHTML={{ __html: htmlOutput }} />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default MarkdownEditor;
