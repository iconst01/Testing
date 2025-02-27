import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home Component", () => {
    it("renders homepage with correct heading", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText("Your guided path to programming enlightnment")).toBeInTheDocument();
    });
});
