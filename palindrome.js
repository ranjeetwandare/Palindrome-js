let value = 121;

const revValue = () => {
  let myRevValue = value.toString().split("").reverse().join("");
  let myStrVal = value.toString();

  if (myStrVal === myRevValue) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
};

revValue();
