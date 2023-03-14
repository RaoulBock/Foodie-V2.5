export const ApiServices = {
  on_login: async ({ email, password, UserCookie }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", UserCookie);

    var raw = JSON.stringify({
      email: email,
      password: password
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    return fetch("https://foodie-kgss.onrender.com/auth/signin", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //  console.log(result);
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
    password
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      account_verification: account_verification,
      account_type: account_type,
      phone: phone,
      password: password
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    return fetch("https://foodie-kgss.onrender.com/api/users", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  },

  on_post_house: async ({
    address,
    amount,
    description,
    description_2,
    images,
    contactNumber,
    method_type,
    user_created
    // payment_type
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      address: address,
      amount: amount,
      description: description,
      description_2: description_2,
      images: images,
      contactNumber: contactNumber,
      method_type: method_type,
      user_created: user_created
      //  payment_type: payment_type
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    return fetch("https://foodie-kgss.onrender.com/places", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  }
  // on_get_cities: async({}),
};
