import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import App from "../App";
import Header from "../Header";


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
  test("initial value of total is 0, to two decimal places", async () => {
    render(<App />);
    const totalNum = await screen.findByTestId("totalNum");
    expect(totalNum.textContent).toBe("$0.00");
  })
  test("initial checked boxes to equal 0", async () => {
    render(<App />);
    const totalChecked = await screen.findByTestId("totalChecked");
    expect(totalChecked.textContent).toBe("Check Row Count: 0");
  })
});

describe("Table header component", () => {
  test("contains correct column names", async () => {
    render(<App />);
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



// jest.mock('axios');

// describe('getJSONdata', () = > {
//   it('should return users lists', async () => {

//     const fakeUsers = [{
//       "id": 1,
//       "creditorName": "NYC Bank",
//       "firstName": "Test",
//       "lastName": "User",
//       "minPaymentPercentage": 1.5,
//       "balance": 1000,
//     }, {
//       "id": 2,
//       "creditorName": "NYC Bank",
//       "firstName": "Test2",
//       "lastName": "User2",
//       "minPaymentPercentage": 2.5,
//       "balance": 2000,
//     }];

// })

// describe('Loads JSON using axios', () => {
//   test('it displays a row for each user', async () => {
//     render(<App />);
//     expect(axios.get).toEqual());
//    // expect(axios.get).toHaveBeenCalled(jest.fn());
//   })
// })