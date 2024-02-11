function passwords(input) {
    let guess = input[0];

    if (guess === "sectrepassword") {
        console.log("welcome");
    } else {
        console.log("wrong password");
    }

}
passwords(["qwerty"]);