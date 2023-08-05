function LoginValidation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  const nicPattern = /^(?:\d{9}[Vv])|(?:\d{12})$/;

  if (values.name === "") {
    error.name = "* Name should not be empty";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "* Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = " * Email should be valid";
  } else {
    error.email = "";
  }

  if (values.tpNum === "") {
    error.tpNum = "* Contact Number should not be empty";
  } else if (values.tpNum.toString().length !== 10) {
    error.tpNum = "* Contact Number should be valid";
  } else {
    error.tpNum = "";
  }

  if (values.nic === "") {
    error.nic = "* NIC Number should not be empty";
  } else if (!nicPattern.test(values.nic)) {
    //pattern correct
    if (
      values.nic.toString().length === 12 ||
      values.nic.toString().length === 10
    ) {
      error.nic = " * Nic should be valid";
    }
    error.nic = "";
  } else {
    error.nic = " * Nic should be valid";
  }

  if (values.password === "") {
    error.password = "* Password should not be empty";
  } else {
    error.password = "";
  }

  if (values.re_password === "") {
    error.re_password = "* Re-enter your password";
  } else if (values.re_password.toString() === values.password.toString()) {
    error.re_password = "";
  } else {
    error.re_password = "* Password misatch";
  }

  return error;
}

export default LoginValidation;
