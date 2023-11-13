import axios from "axios";
const apiurl = import.meta.env.VITE_BACKEND_URL;
const expirationDays = 1;
export const isUserLoggedIn = async () => {
  try {
    const response = await axios.get(`${apiurl}auth/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
      timeout: 5000,
    });

    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const signup = async ({email, password, firstname, lastname, organization}) => {
  try {
    await getCSRF(); 
    const response = await axios.post(`${apiurl}auth/users/`, {
      email: email,
      password: password,
      first_name: firstname,
      last_name: lastname,
      organization,
    }, {
      headers: {
        "X-CSRFToken": getCookie("csrftoken"), 
      },
      timeout: 5000, 
    });

    const responseData = response.data;
    if (response.status === 200) {
      localStorage.setItem("access_token", responseData.access);
      localStorage.setItem("refresh_token", responseData.refresh);
      console.log(responseData, "here is the created user");
    } else if (response.status === 400) {
      console.log(responseData, "here is the error");
    }
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    } else if (error.code === 'ERR_BAD_REQUEST' && error.response.status === 400) {
      if (error.response.data.email) {
        throw new Error(error.response.data.email[0]);
      } else if (error.response.data.password) {
        throw new Error(error.response.data.password[0]);
      }
    } else {
      throw error;
    }
  }
};

export const login = async (email, password) => {
  try {
    await getCSRF(); // Assuming getCSRF() is a function you've defined elsewhere

    const response = await axios.post(`${apiurl}auth/jwt/create/`, {
      email,
      password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
    });

    if (response.status === 200) {
      const responseData = response.data;
      setCookie("access_token", responseData.access, expirationDays);
      setCookie("refresh_token", responseData.refresh, expirationDays);
      const nextStation = new URLSearchParams(window.location.search).get("next");
      return nextStation || "/platform/overview";
    }
  } catch (error) {
    if (error.code === 'ERR_BAD_REQUEST' && error.response.status === 401) {
      throw new Error('Incorrect email or password.');
    }
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

export const logout =  () => {
  eraseCookie("access_token");
  eraseCookie("refresh_token");
};

export const getCookie = (name = "csrftoken") => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const getCSRF = async () => {
  try {
    await axios.get(`${apiurl}csrf`, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
    });
    // Axios automatically handles the CSRF token set in the cookie
  } catch (error) {
    throw error;
  }
};

function setCookie(name, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // Calculate expiration date
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/; secure; samesite=strict"; // Set the cookie with secure and SameSite attributes
}

function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}