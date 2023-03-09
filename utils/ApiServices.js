export const ApiServices = {
  on_login: async ({ email, password, UserCookie }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", UserCookie);

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      "https://market-place-main.onrender.com/auth/signin",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  },

  on_register: async ({
    name,
    email,
    account_verification,
    account_type,
    phone,
    password,
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      account_verification: account_verification,
      account_type: account_type,
      phone: phone,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      "https://market-place-main.onrender.com/api/users",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  },

  on_post_house: async ({
    streetName,
    amount,
    description,
    images,
    contactNumber,
    method_type,
    payment_type,
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      streetName: streetName,
      amount: amount,
      description: description,
      images: images,
      contactNumber: contactNumber,
      method_type: method_type,
      payment_type: payment_type,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      "https://market-place-main.onrender.com/places",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  },
  // on_get_cities: async({}),
};