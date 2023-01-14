import figlet from "figlet";

figlet("Hello world", (err, data) => {
  if (err) {
    console.log(err, data);
    return;
  }
  console.log(data);
});
