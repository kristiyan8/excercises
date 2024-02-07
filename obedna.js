function obednaSerial(input) {
    let serialName = Number(input[0]);
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let LunchTime = (1 / 8) * breakTime;
    let restDuriation = (1 / 4) * breakTime;
    
    let freeTime = breakTime - LunchTime - restDuriation;

    if (freeTime >= episodeTime) {
        
        let timeleft = freeTime - episodeTime;

        console.log(`you have enough time to watch ${serialName} and you will have ${timeleft} to relax`);
    } else {
        let neededTime = episodeTime - freeTime;
        console.log(`"You don't have enough time to watch ${serialName}, you need ${neededTime} more minutes."`);
    }


}
obednaSerial(["Game of Thrones",
    "60",
    "96"]);
