// import * as jwtDecode from "jwt-decode";

export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  // console.log(event._headers);
  // const token = localStorage.getItem("authToken");
  // if (token) {
  //   try {
  //     const decodedToken = jwtDecode.jwtDecode(token);
  //     const currentTime = Date.now() / 1000;
  //     if (decodedToken.exp < currentTime) {
  //       localStorage.removeItem("authToken");
  //       return navigateTo("/login");
  //     }
  //   } catch (error) {
  //     // Handle token decoding error
  //     localStorage.removeItem("authToken");
  //     return navigateTo("/login");
  //   }
  // } else if (to.name !== "login") {
  //   return navigateTo("/login");
  // }
});
