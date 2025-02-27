import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import LogoutButton from "../components/LogoutButton";
import { UserContext } from "../context/UserProvider";


// Mock useNavigate from react-router-dom
vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: vi.fn(() => vi.fn()), // Mock useNavigate function
    };
});

test("logs out the user and navigates to home", () => {
    const mockSetUser = vi.fn();
    render(
        <MemoryRouter>
            <UserContext.Provider value={{ user: { username: "testUser" }, setUser: mockSetUser }}>
                <LogoutButton />
            </UserContext.Provider>
        </MemoryRouter>
    );

    const logoutButton = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(logoutButton);

    expect(mockSetUser).toHaveBeenCalledWith(null);
});

