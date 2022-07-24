let order = null;
if(order === null || order === undefined) {
   order = "fries";
}
console.log(order);

// shows the first defined value:
const lunch = order ?? "fries";
console.log(lunch)