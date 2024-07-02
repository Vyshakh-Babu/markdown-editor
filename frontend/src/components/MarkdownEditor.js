import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
				handleClear();
			} else {
				const convertedHtml = await convertMarkdown(value);
				setHtmlOutput(convertedHtml);
				// console.log("Converted", htmlOutput);
			}
		} catch (error) {
			console.error("Error converting Markdown:", error);
		}
	};

	const handleClear = () => {
		setMarkdownText("");
		setHtmlOutput("");
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
					<Button variant="danger" size="lg" onClick={handleClear} className="mt-3">
						Clear
					</Button>
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
