function createFrame(names) {
  names.sort((a, b) => a - b);
  let result = '*'.repeat(names[names.length].length + 2) + '\n';
  names.forEach(element => (result += `* ${element} *${'\n'}`));
  result += '*'.repeat(names.length + 2);
  // Code here
  return result;
}
