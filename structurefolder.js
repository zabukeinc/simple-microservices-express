const fs = require("fs");
const path = require("path");

function generateMarkdownTree(dirPath, level = 0) {
  let result = "";
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    // Skip excluded files and directories
    if (file === "node_modules" || file === "package.json") return;

    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    result += `${"  ".repeat(level)}- ${file}\n`;
    if (stats.isDirectory()) {
      result += generateMarkdownTree(filePath, level + 1);
    }
  });
  return result;
}

const dirPath = "services/";
const markdownTree = generateMarkdownTree(dirPath);
fs.writeFileSync("structure.md", markdownTree);
