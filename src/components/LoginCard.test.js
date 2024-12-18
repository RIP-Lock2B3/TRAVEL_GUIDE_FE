const React = require("react");
const { render, screen, fireEvent } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
const axios = require("axios");
const LoginCard = require("./LoginCard").default;

// Mock axios to prevent actual API calls during tests
jest.mock("axios");


describe("LoginCard Component", () => {
  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  test("renders the LoginCard component", () => {
    renderWithRouter(<LoginCard />);
  
    // Target the paragraph element with "SIGN IN"
    expect(screen.getByText(/SIGN IN/i, { selector: 'p' })).toBeInTheDocument();
  
    // Target the button element with "SIGN IN"
    expect(screen.getByRole('button', { name: /SIGN IN/i })).toBeInTheDocument();
  
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/Forgot Password\?/i)).toBeInTheDocument();
  });
});
