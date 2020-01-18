//console.log(process.argv)
var acum = 0;
for (i = 2; i < ProcessingInstruction.argv.length; i++) {
    acum = acum + Number(process.argv[i]);
}
console.log(acum);