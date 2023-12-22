const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const show = async () => {
  try {
    let start = await readFile("./Content/first.txt", "utf8");
    let second = await readFile("./Content/second.txt", "utf8");
    // await writeFile("./Content/Sub_folder/text.txt",`Awesome ${start} Then ${second}`,{ flag: "a" });
    console.log(start, "next", second);
  } catch (err) {
    console.log(err);
  }
};
show();

// const call = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// call("./Content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
