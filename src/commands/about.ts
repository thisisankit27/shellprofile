import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];
  const SPACE = "&nbsp;";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");

  const addContactInfo = (label: string, url: string, icon: string) => {
    let string = SPACE.repeat(2) + `<i class='${icon}'></i> ${label}`;
    string += SPACE.repeat(17 - label.length);
    if (label === "Email") {
      string += `<a target='_blank' href='mailto:${url}'>${url}</a>`;
    } else if (label === "Github") {
      string += `<a target='_blank' href='${'https://github.com/' + url}'>${url}</a>`;
    }
    else if (label === "Linkedin") {
      string += `<a target='_blank' href='${'https://www.linkedin.com/in/' + url}'>${url}</a>`;
    }
    else if (label === "My Resume") {
      string += `<a target='_blank' href='${url}'>drive.google/AnkitSrivastava</a>`;
    }
    about.push(string);
  };
  

  addContactInfo("Email", command.social.email.url, command.social.email.icon);
  addContactInfo("Github", command.social.github.url, command.social.github.icon);
  addContactInfo("Linkedin", command.social.linkedin.url, command.social.linkedin.icon);
  
  about.push("<br>");

  addContactInfo("My Resume", command.documents.resume.url, command.documents.resume.icon);
  about.push("<br>");

  about.push("Comfort Zone:");
  about.push("<br>");

// Technologies
let techLine = SPACE.repeat(2);
let techCount = 0;
for (const tech of command.technologies) {
  techLine += `<i class="${tech.icon}"></i> ${tech.name}`;
  techLine += SPACE.repeat(15 - tech.name.length);
  techCount++;
  if (techCount === 5) {
    about.push(techLine);
    about.push("<br>");
    techLine = SPACE.repeat(2);
    techCount = 0;
  }
}
// Push the remaining technologies if any
if (techCount > 0) {
  about.push(techLine);
}
  
  return about;
}

export const ABOUT = createAbout();