function familytree(family, Relationship = []) {
    Relationship.push(family);
    console.log(family);
    console.log(Relationship);
}

familytree("Father");
familytree("Mother");

// const d = new Date().getFullYear();
// console.log(d)