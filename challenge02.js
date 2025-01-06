function createFrame(names) {
  let size = 0;
  names.forEach(element => {
    if (element.length > size) {
      size = element.length;
    }
  });
  let result = '*'.repeat(size + 4) + '\n';
  names.forEach(
    element =>
      (result += `* ${element}${' '.repeat(size - element.length)} *${'\n'}`)
  );
  result += '*'.repeat(size + 4);
  // Code here
  return result;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
