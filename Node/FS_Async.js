const { readFile, writeFile} = require("fs");

readFile("./Content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  }
  const first = res;

  readFile("./Content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
    }
    const second = res;

    writeFile(
      "./Content/result_Async.txt",
      `New One File Fetched ${first} and ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
        }
        const result = res;
        console.log("Successfully Updated");
      }
    );
  });
});
