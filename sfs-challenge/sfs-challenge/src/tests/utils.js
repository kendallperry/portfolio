import axios from "axios";
import { JSON_DATA_URL } from "../setupInfo";

export const fetchJSON = () => {
    return axios.get(JSON_DATA_URL);
}

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