const fs = require('fs');

const packagePath = './web-components-library/package.json';

fs.readFile(packagePath, 'utf8', (err, data) => {
  if (err) throw err;
  const packageFile = data;

  const parsedPackage = packageFile.match(/(?:"version":|\G) "([^ ]+)",/);

  const version = parsedPackage[1];
  // console.log(version);
  const splittedVersion = version.split('.');
  // console.log(splittedVersion);
  const versionNum = splittedVersion.map(n => parseInt(n, 10));
  // console.log(versionNum);
  const newVersionNumb = versionNum[versionNum.length - 1] + 1;
  versionNum[versionNum.length - 1] = newVersionNumb;
  // console.log(newVersionNumb);
  const newVersion = versionNum.join('.');
  const newPackageFile = packageFile.split(`"version": "${version}"`).join(`"version": "${newVersion}"`);
  // console.log(newPackageFile);
  fs.open(packagePath, 'w', (err, fd) => {
    if (err) {
      console.log(err); // eslint-disable-line
    }

    fs.write(fd, newPackageFile, 0, newPackageFile.length, err => {
      if (err) {
        console.log(err); // eslint-disable-line
      }
    });
  });
  // sagaPositionerOne.splice(1, 0, sagaImport);
});
