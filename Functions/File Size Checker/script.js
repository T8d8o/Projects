function checkSize(fileSize) {
    const maxSize = 5;
    const minSize = 1;
    const overMaxSize = fileSize > maxSize;
    const underMinSize = fileSize < minSize;
    const numberValue = 10;
    console.log("Upload Permitted?");
    console.log("The file is too large: " + overMaxSize);
    console.log("The file is too small: "+ underMinSize);
  }
  checkSize();