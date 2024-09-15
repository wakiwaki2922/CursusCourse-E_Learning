import axios from "axios";
import nookies from "nookies";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.BASE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    let token;

    if (typeof window !== "undefined") {
      // Client-side code
      token = Cookies.get('jwtToken');
      console.log("Client side cookies: ", token);
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Set 'Content-Type': 'application/json' if the request is not FormData
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;


// import axios from "axios";
// import nookies from "nookies";
// import Cookies from "js-cookie";

// const api = axios.create({
//   baseURL: process.env.BASE_API_URL,
//   // headers: {
//   //     'Content-Type': 'application/json'
//   // },
//   withCredentials: true,
// });

// api.interceptors.request.use(
//   async (config) => {
//     let token;

//     if (typeof window !== "undefined") {
//       // Client-side code
//       // const userData = JSON.parse(localStorage.getItem('userData') || '{}');
//       // token = userData?.jwtToken;
//       const cookies = Cookies.get();
//       console.log("Client side cookies: ", cookies);
//       token = cookies.jwtToken;
//     } else if (config.headers) {
//       // Server-side code (Next.js API routes or server-side rendering)
//       const cookies = nookies.get({
//         req: { headers: { cookie: config.headers.cookie } },
//       });
//       console.log("Server side cookies: ", cookies);
//       token = cookies.jwtToken;
//     }

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     // Set 'Content-Type': 'application/json' if the request is not FormData
//     if (!(config.data instanceof FormData)) {
//       config.headers["Content-Type"] = "application/json";
//     }
//     console.log("JWT TOKEN: ", token);
//     console.log("Request config:", config);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;