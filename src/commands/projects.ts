import command from '../../config.json' assert {type: 'json'};

const createProject = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = '';
    // Check if the project entry has details
    if (ele.length > 3) {
      // Split the project description and add each line individually
      const descriptionLines = ele[3].split('\n');
      descriptionLines.forEach((line) => {
        string += SPACE.repeat(20);
        string += line.trim(); // Trim to remove any leading/trailing spaces
        string += `<br>`;
      });
    }
    projects.push(string);
    string = '';
    projects.push("<br>");
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects
}

export const PROJECTS = createProject()
