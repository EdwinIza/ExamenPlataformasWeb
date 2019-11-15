function findEmailByName(name) {
    return csvData.filter(data => data.Name === name)[0].Email
}

console.log(
    findEmailByName('exampleName2')
);