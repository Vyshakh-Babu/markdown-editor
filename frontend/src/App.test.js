// App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MarkdownEditor from "./components/MarkdownEditor";
import { convertMarkdown } from "./services/markdownService";

jest.mock("./services/markdownService");

describe("MarkdownEditor Component", () => {
	beforeEach(() => {
		convertMarkdown.mockClear();
	});

	it("renders MarkdownEditor component correctly", () => {
		render(<MarkdownEditor />);
		const textareaElement = screen.getByPlaceholderText(/Enter Markdown here.../i);
		expect(textareaElement).toBeInTheDocument();
	});

	it("updates HTML preview when typing Markdown text", async () => {
		convertMarkdown.mockResolvedValue("<h1>Hello, Markdown!</h1>");

		render(<MarkdownEditor />);
		const textareaElement = screen.getByPlaceholderText(/Enter Markdown here.../i);
		fireEvent.change(textareaElement, { target: { value: "# Hello, Markdown!" } });

		// Wait for the HTML preview to update (you might need to adjust timing if async)
		await screen.findByText("Hello, Markdown!", { exact: false });
		expect(screen.getByText("Hello, Markdown!")).toBeInTheDocument();
	});

	it("handles error when converting Markdown", async () => {
		convertMarkdown.mockRejectedValue(new Error("Conversion error"));

		render(<MarkdownEditor />);
		const textareaElement = screen.getByPlaceholderText(/Enter Markdown here.../i);
		fireEvent.change(textareaElement, { target: { value: "# Hello, Markdown!" } });

		// Handle error display logic in your component
		await screen.findByText(/Error converting Markdown/i);
		expect(screen.getByText(/Error converting Markdown/i)).toBeInTheDocument();
	});
});
