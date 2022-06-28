// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { JSON_DATA_URL } from './setupInfo';

export const fakeUsers = [{
    "id": 1,
    "creditorName": "NYC Bank",
    "firstName": "Test",
    "lastName": "User",
    "minPaymentPercentage": 1.5,
    "balance": 1000,
  }, {
    "id": 2,
    "creditorName": "NYC Bank",
    "firstName": "Test2",
    "lastName": "User2",
    "minPaymentPercentage": 2.5,
    "balance": 2000,
  }];

export default async function mockFetch(url) {
    switch (url) {
        case JSON_DATA_URL: {
            return {
                ok: true,
                status: 200,
                json: async () => fakeUsers,
            }
        }
        default: {
            throw new Error(`Unhandled request: ${url}`)
        }
    }
}