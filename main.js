//old way
const response = new XMLHttpRequest();

response.addEventListener("readystatechange", () => {
  if (response.readyState === 4 && response.status === 200) {
    console.log(response.responseText);
  } else if (response.readyState === 4) {
    console.log("could not fetch data");
  }
});

response.open("GET", "other.json");
response.send();

// new way
const main = async () => {
  const response = await fetch("other.json");

  if (response.status !== 200) {
    throw new Error("the resource could not be found");
  }
  const data = await response.json();

  return data;
};

main()
  .then((data) => console.log(data))
  .catch((err) => console.log("could not load the data", err));

const response2 = async () => {
  const res = await fetch("other.json");
  const data = res.json();
  return data;
};

response2()
  .then((data) => console.log(data))
  .catch((err) => console.log("there was an error loading the data"));
