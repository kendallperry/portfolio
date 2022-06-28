import { render, screen, waitFor, userEvent } from "@testing-library/react";
import mockFetch from "../setupTests";
import App from "../App";
import Header from "../Header";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(() => {
  jest.restoreAllMocks()
});

describe("Renders the landing page", () => {
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
});

describe("Add and Remove Debt Button", () => {
  test("add debt button renders", async () => {
    render(<App />);
    const addDebtButton = await screen.findByTestId("addButton");
    expect(addDebtButton).toBeInTheDocument();
    expect(addDebtButton.textContent).toBe("Add Debt");
  });

  test("remove debt button renders", async () => {
    render(<App />);
    const deleteDebtBtn = await screen.findByTestId("deleteButton");
    expect(deleteDebtBtn).toBeInTheDocument();
    expect(deleteDebtBtn.textContent).toBe("Remove Debt");
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

// describe("Values after buttons clicked", () => {
//   test("add button increments check row by 1", () => {
//     render(<App />);
//     const mockFunction = jest.fn(() => console.info('button clicked'));
//   })
// })

describe("Table header component", () => {
  test("contains correct column names", async () => {
    render(<Header />);
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
})



  // xtest("user data", async () => {
  //   axios.get.mockResolvedValue({ data: fakeUsers });
  //   const userRows = await waitFor(() => screen.findAllByTestId("userRow"));
  //   expect(userRows).toHaveLength(2);
  // })


// describe('Loads JSON using axios', () => {
//   test('it displays a row for each user', async () => {
//     render(<App />);
//     expect(axios.get).toEqual());
//    // expect(axios.get).toHaveBeenCalled(jest.fn());
//   })
// })