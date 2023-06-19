// code your solution here
const superbowlWin = (records) => {
  const win = records.find((record) => record.result === "W");

  if (win) {
    return win.year;
  } else {
    return undefined;
  }
};
