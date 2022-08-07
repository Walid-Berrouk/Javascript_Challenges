let seasons = {
    winter : ["January", "December", "February"],
    spring : ["March", "April", "May"],
    summer  :["June", "July", "August"],
    autumn : ["September", "October", "November"],
    
}

let month = "September"

for (const key in seasons) {
    if (seasons[key].indexOf(month) != -1) {
        console.log("The Season is :", key);
    }
}

