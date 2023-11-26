import axios from "axios";
const apiurl = import.meta.env.VITE_BACKEND_URL;
const genericDomain = import.meta.env.VITE_KEYWORDS_DOMAIN; // for all subdomains, .keywordsai.co
const extractMainDomain = "." + (window.location.hostname.includes("keywordsai.co")? genericDomain:window.location.hostname);
// const extractMainDomain = genericDomain;
const expirationDays = 7;
const bypassAuth = false;
export const isUserLoggedIn = async () => {
  if (bypassAuth) return true;
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

function setCookie(name, value, expirationDays, domain = extractMainDomain) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // Calculate expiration date
  const expires = "expires=" + date.toUTCString();
  console.log("cookie", name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;domain=" + domain + ";secure; SameSite=Lax")
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;domain=" + domain + ";secure; SameSite=Lax";
}


function eraseCookie(name, path="/") {
  const domain = extractMainDomain;
  document.cookie = name + '=; Max-Age=-99999999; domain=' + domain + '; path=' + path;
}
