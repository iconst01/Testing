import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import UserInfoCard from "../components/UserInfoCard"; // Adjust path if needed
import { UserContext } from "../context/UserProvider";



// Mock useNavigate
vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: vi.fn(() => vi.fn()),
    };
});

test("displays the correct username", () => {
    render(
        <MemoryRouter>
            <UserContext.Provider value={{ user: { username: "testUser" } }}>
                <UserInfoCard />
            </UserContext.Provider>
        </MemoryRouter>
    );

    expect(screen.getByText("testUser")).toBeInTheDocument();
});
