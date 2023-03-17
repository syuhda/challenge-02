const getSplitName = (personName = "") => {
  //   const [firstName, midName, lastName] = personName.split(" ").filter(Boolean);
  // const [firstName, middleName, lastName] = personName.split(" ");
  // middleName = lastName ? middleName : null;
  // lastName =
  // console.log(firstName, middleName, lastName);
  // return {
  //   firstName,
  //   middleName: lastName == null ? null : middleName,
  //   lastName: lastName == null ? middleName : lastName,
  // };

  let name = personName.split(" ");
  if (name.length > 2 && name.length <= 3) {
    output = [
      {
        firstname: name[0],
        middlenames: name[1],
        lastname: name[name.length - 1],
      },
    ];
  } else if (name.length < 2) {
    output = [
      {
        firstname: name[0],
        middlenames: null,
        lastname: null,
      },
    ];
  } else if (name.length == 2) {
    output = [
      {
        firstname: name[0],
        middlenames: null,
        lastname: name[name.length - 1],
      },
    ];
  } else {
    output = "Error: This function is only for 3 characters name";
  }
  return output;
};

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
