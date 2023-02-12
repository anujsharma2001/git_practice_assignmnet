let arr = "naman";
bag = "";
for (let i = arr.length - 1; i <= 0; i--) {
  bag = bag + arr[i];
}
if (bag == arr) {
  console.log(true);
} else {
  console.log(false);
}
