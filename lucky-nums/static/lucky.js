/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
  evt.preventDefault();
  const name = $("#name").val();
  const year = $("#year").val();
  const email = $("#email").val();
  const color = $("#color").val();

  const resp = await axios.post("/api/get-lucky-num", {name, year, email, color});
  handleResponse(resp.data);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
  const errors = resp.errors
  const $nameErr = $("#name-err")
  const $yearErr = $("#year-err")
  const $emailErr = $("#email-err")
  const $colorErr = $("#color-err")

  $nameErr.text('');
  $yearErr.text('');
  $emailErr.text('');
  $colorErr.text('');

  if (errors) {
    $nameErr.text(errors.name)
    $yearErr.text(errors.year)
    $emailErr.text(errors.email)
    $colorErr.text(errors.color)
  } else {
    const num = resp.num;
    const year = resp.year;
    $("#lucky-results").text(`Your lucky number is ${num.num} (${num.fact}).
    Your birth year (${year.year}) fact is ${year.fact}`)
  }
}

$("#lucky-form").on("submit", processForm);
