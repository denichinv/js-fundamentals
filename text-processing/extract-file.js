function extractFile(str) {
  const pathRemoved = str.split("\\");
  const fileWithExtension = pathRemoved.pop();

  const wordByChar = fileWithExtension.split("");
  const lastIndex = wordByChar.lastIndexOf(".");
  const extension = wordByChar.slice(lastIndex + 1).join("");
  const fileName = wordByChar.splice(0, lastIndex).join("");
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
