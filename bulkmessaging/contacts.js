const reader = require("xlsx");

const file = reader.readFile(
    "/home/rserage/Documents/Python_programming/data-science/dry-bean/Dry_Bean_Dataset.xlsx"
);
let data = [];

const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
        data.push(res);
    });
}

console.log(data);
