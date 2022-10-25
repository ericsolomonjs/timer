const args = process.argv;

for (let i = 2; i < args.length; i++) {
  //edge case handling
  if ((args[i] <= 0) || (args[i] === NaN)){
    console.log('invalid values entered');
    break;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, args[i]*1000)
}