const fs = require('fs-extra');
const path = require('path');

function copyDependencies(inFolder, outFolder) {
    fs.readdirSync(path.resolve(__dirname, inFolder), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, inFolder + folderName)).forEach((file) => {
                if (file === 'package.json' || file.endsWith('d.ts') || file.endsWith('vue')) {
                    fs.copySync(path.resolve(__dirname, inFolder + folderName) + '/' + file, outFolder + folderName + '/' + file);
                }
            });
        });
}

copyDependencies('./components/lib/', 'dist/');
copyDependencies('./components/lib/icons/', 'dist/icons/');

fs.copySync(path.resolve(__dirname, './components/lib/ts-helpers.d.ts'), 'dist/ts-helpers.d.ts');
fs.copySync(path.resolve(__dirname, './package-build.json'), 'dist/package.json');
fs.copySync(path.resolve(__dirname, './README.md'), 'dist/README.md');
fs.copySync(path.resolve(__dirname, './LICENSE.md'), 'dist/LICENSE.md');
