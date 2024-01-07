import apiConfig from "src/services/apiConfig";
import { getCookie } from "src/utilities/Authentication";
import { retrieveAccessToken } from "src/utilities/authorization";

export const createPaymentSession = async (checkoutItems) => {
  try {
    const response = await fetch(
      `${apiConfig.apiURL}payment/create-payment-session/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
          Authorization: `Bearer ${retrieveAccessToken()}`,
        },
        body: JSON.stringify(checkoutItems),
      }
    );
    const session = await response.json();
    console.log(session);
    // window.location = session.url;
  } catch (error) {
    console.log(error);
  }
};

export const cancelSubscription = async () => {
  try {
    const response = await fetch(
      `${apiConfig.apiURL}payment/cancel-subscription/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
          Authorization: `Bearer ${retrieveAccessToken()}`,
        },
      }
    );
    const data = await response.json();
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}