import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import mockFetch, { fakeUsers } from "../setupTests";
import App from "../App";
import Buttons from "../Buttons";
import TableHeader from "../TableHeader";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(() => {
  jest.restoreAllMocks()
});


describe("Initial Render", () => {
  test("contains SFS heading", () => {
    render(<App />);
    const header = screen.getByTestId("header");
    expect(header.textContent).toBe("Strategic Financial Solutions")
  });

  test("contains data table", () => {
    render(<App />)
    const dataTable = screen.getByRole("table");
    expect(dataTable).toBeInTheDocument();
  });

  test('App component initially loads and renders json', async () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  })
});

describe('Add & Remove buttons', () => {
  test("add debt button renders", async () => {
    render(<App />);
    const addDebtButton = await screen.findByTestId("addButton");
    expect(addDebtButton).toBeInTheDocument();
    expect(addDebtButton.textContent).toBe("Add Debt");
  });

  test("add debt calls the handleSubmit function", async () => {
    const mockSubmit = jest.fn();
    render(<Buttons handleSubmit={mockSubmit}/>)
    const addButton = await screen.findByTestId("addButton");
    user.click(addButton);
    expect(mockSubmit).toBeCalledTimes(1);
  });

  test("remove debt button renders", async () => {
    render(<App />);
    const deleteDebtBtn = await screen.findByTestId("deleteButton");
    expect(deleteDebtBtn).toBeInTheDocument();
    expect(deleteDebtBtn.textContent).toBe("Remove Debt");
  });

  test("remove debt calls handleDelete function", async () => {
    const mockDelete = jest.fn();
    render(<Buttons handleDelete={mockDelete} />);
    const deleteBtn = await screen.findByTestId("deleteButton");
    user.click(deleteBtn);
    expect(mockDelete).toBeCalledTimes(1);
  });
});

describe("Initial Values", () => {
  test("initial value of total is 0, displayed to two decimal places", async () => {
    render(<App />);
    const totalNum = await screen.findByTestId("totalNum");
    expect(totalNum.textContent).toBe("$0.00");
    expect(totalNum).toBeInTheDocument();
  })
  test("initial checked boxes to equal 0", async () => {
    render(<App />);
    const totalChecked = await screen.findByTestId("totalChecked");
    expect(totalChecked.textContent).toBe("Check Row Count: 0");
  })
  test("total row count is included", async () => {
    render(<App />);
    const totalRowCount = await screen.findByTestId("totalRowCount");
    expect(totalRowCount).toBeInTheDocument();
  })
});

describe("Table header component", () => {
  test("contains correct column names", async () => {
    render(<TableHeader />);
    const th1 = await screen.findByTestId("th1");
    const th2 = await screen.findByTestId("th2");
    const th3 = await screen.findByTestId("th3");
    const th4 = await screen.findByTestId("th4");
    const th5 = await screen.findByTestId("th5");
    expect(th1.textContent).toBe("Creditor");
    expect(th2.textContent).toBe("First Name");
    expect(th3.textContent).toBe("Last Name");
    expect(th4.textContent).toBe("Min Pay %");
    expect(th5.textContent).toBe("Balance");
  })
});
