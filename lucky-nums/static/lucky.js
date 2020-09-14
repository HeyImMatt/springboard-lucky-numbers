/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
  evt.preventDefault();
  const name = $("#name").val();
  const year = $("#year").val();
  const email = $("#email").val();
  const color = $("#color").val();

  const resp = await axios.post("/api/get-lucky-num", {name, year, email, color});
  handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
  console.log(resp)
}



$("#lucky-form").on("submit", processForm);
