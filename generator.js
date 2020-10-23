fs = require("fs");

return fs.readFile("./PREGUNTAS.txt", "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }

  const lines = data
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => !line.startsWith("#"));

  const questions = [];
  let index = 0;
  let item;

  lines.forEach((line) => {
    if (line.startsWith("---")) {
      return;
    }

    switch (index) {
      case 1:
        item.options = line.split(",").map((opt) => opt.trim());
        break;
      case 2:
        item.difficulty = `@Difficulty.${line}@`;
        break;
      case 3:
        item.reference = line;
        break;
      default:
        item = {
          difficulty: "",
          question: line,
          options: [],
          reference: "",
        };
        break;
    }

    ++index;

    if (index > 3) {
      if (item) {
        questions.push({ ...item });
        index = 0;
        item = undefined;
      }
    }
  });

  let doc = JSON.stringify(questions, null, 2);

  doc = `import { Difficulty } from '../types/Difficulty';\nimport IQuestion from '../types/IQuestion';\n\nexport const questions: IQuestion[] = ${doc};\n`
    .replace(/"@|@"|/gi, "")
    .replace(/"difficulty"/gi, "difficulty")
    .replace(/"question"/gi, "question")
    .replace(/"options"/gi, "options")
    .replace(/"reference"/gi, "reference")
    .replace(/"/gi, "'");

  fs.writeFile("./src/app/content/questions.ts", doc, (err) => {
    if (err) return console.log(err);
    console.log("Questions generated!");
  });

  return true;
});
