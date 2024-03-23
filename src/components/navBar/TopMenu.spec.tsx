import { render, screen, fireEvent } from "@testing-library/react";
import * as nextAuthReact from "next-auth/react";
import TopMenu from "./TopMenu";
import "@testing-library/jest-dom";
import { Session } from "next-auth";

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

describe("TopMenu", () => {
  it("shows user name and sign out button when user is signed in", () => {
    jest.spyOn(nextAuthReact, "useSession").mockReturnValue({
      data: {
        user: {
          name: "John Doe",
          address: "123 Main St",
        },
        expires: ""
      },
      status: "authenticated",
      update: function (data?: any): Promise<Session | null> {
        throw new Error("Function not implemented.");
      }
    });

    render(<TopMenu />);

    expect(screen.getByText("John Doe,")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign out/i })
    ).toBeInTheDocument();
  });

  it("shows sign in button when user is not signed in", () => {
    jest.spyOn(nextAuthReact, "useSession").mockReturnValue({
      data: null,
      status: "unauthenticated",
      update: function (data?: any): Promise<Session | null> {
        throw new Error("Function not implemented.");
      }
    });

    render(<TopMenu />);

    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });
});

test("loads and displays TopMenu", async () => {
  render(<TopMenu />);

  expect(screen.getByText("Home"));
  expect(screen.getByText("About"));
  expect(screen.getByText("Services"));
  expect(screen.getByText("Pricing"));
  expect(screen.getByText("Contact"));
});
