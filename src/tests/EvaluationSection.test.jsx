import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import EvaluationSection from "../components/EvaluationSection";

describe("EvaluationSection Component", () => {
    it("renders the correct answer and evaluation", () => {
        render(<EvaluationSection correctAnswer="42" evaluation="This is the answer." handleNext={() => {}} isLastQuestion={false} />);
        
        expect(screen.getByText("Correct Answer: 42")).toBeInTheDocument();
        expect(screen.getByText("This is the answer.")).toBeInTheDocument();
    });

    it("calls handleNext when NEXT button is clicked", () => {
        const handleNext = vi.fn();
        render(<EvaluationSection correctAnswer="42" evaluation="This is the answer." handleNext={handleNext} isLastQuestion={false} />);

        fireEvent.click(screen.getByText("NEXT"));
        expect(handleNext).toHaveBeenCalled();
    });

    it("displays FINISH instead of NEXT on the last question", () => {
        render(<EvaluationSection correctAnswer="42" evaluation="This is the answer." handleNext={() => {}} isLastQuestion={true} />);
        
        expect(screen.getByText("FINISH")).toBeInTheDocument();
    });
});
