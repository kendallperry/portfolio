import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import App from "../App";

describe("Renders the landing page", () => {
  test("contains heading", () => {
    render(<App />);
    const header = screen.getByText(/Strategic Financial Solutions/);
    expect(header).toBeInTheDocument();
  });
  test("contains table", () => {
    render(<App />)
    const dataTable = screen.getByRole("table");
    expect(dataTable).toBeInTheDocument();
  });
});

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

describe("Add and Delete Debt Button", () => {
  test("add debt button renders", async () => {
    render(<App />);
    const addDebtButton = await screen.findByTestId("addButton");
    expect(addDebtButton).toBeInTheDocument();
    fireEvent.click(addDebtButton);
  });

  test("delete debt button renders", async () => {
    render(<App />);
    const deleteDebtBtn = await screen.findByTestId("deleteButton");
    expect(deleteDebtBtn).toBeInTheDocument();
  });
});
