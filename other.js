const mytodo = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "other.json");
  request.send();
};

mytodo((err, data) => {
  console.log("callback fired");

  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const mytods = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

mytods("other.json", (err, data) => {
  console.log("callback fired");

  console.log(data);

  mytodos("mine.json", (err, data) => {
    console.log(data);
  });
});

//promise
const mytodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("could not fetch data");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

mytodos("other.json")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//fetch api
fetch("other.json")
  .then((response) => {
    console.log(response);

    return response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Async and await
const todosec = async () => {
  const response = await fetch("other.jso0n");

  if (response.status !== 200) {
    throw new Error("could not fetch data");
  }

  const data = await response.json();
  return data;
};

todosec()
  .then((data) => console.log(data))
  .catch((err) => console.log("no data resource found,", err.message));
