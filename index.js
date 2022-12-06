#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: `Toss an ${chalk.bold("email")}?`,
        value: () => {
          open("mailto:sakshya.work@.com");
          console.log(
            "\nI look forward to reading your message and responding to you as soon as possible.\n"
          );
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log("Goodbye, and have a nice day.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.hex("#00FF00")("                     Sakshya Arora"),
  twitter: chalk.hex("#00FFF6")("twitter.com/AroraSakshya"),
  github: chalk.hex("#E6E5A3")("github.com/sakshya73"),
  linkedin: chalk.hex("#7FE9DE")("linkedin.com/in/sakshyaarora/"),
  stackOverflow: chalk.hex("#EB6440")(
    "stackoverflow.com/users/10429398/sakshya73"
  ),
  instagram: chalk.hex("#FEBE8C")("instagram.com/sakshya_arora73/"),
  hashnode: chalk.hex("#BA94D1")("hashnode.com/@saksh73"),

  labelTwitter: chalk.hex("#009EFF").bold("         Twitter:"),
  labelGitHub: chalk.hex("#10A19D").bold("          GitHub:"),
  labelLinkedin: chalk.hex("#00A1D9").bold("        Linkedin:"),
  labelStackOverflow: chalk.hex("#ef8236").bold("   StackOverflow:"),
  labelInstagram: chalk.hex("#8a3ab9").bold("       Instagram:"),
  labelHashnode: chalk.hex("#6D67E4").bold("        Hashnode:"),
};

const card = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    `${data.labelStackOverflow}  ${data.stackOverflow}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelHashnode}  ${data.hashnode}`,
    ``,
    ``,
    `${chalk.bold("Hi there! I'm Sakshya.")}`,
    `${chalk.bold("I'm a Frontend Engineer from India, and")}`,
    `${chalk.bold("I like creating stylish, cool, responsive mobile and ")}`,
    `${chalk.bold("web apps using React and React-Native.")}`,
    `${chalk.bold("I'd be happy to hear from you.")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "double",
    borderColor: "blue",
  }
);

prompt(questions).then((answer) => answer.action());

// Show the boxen
console.log(card);
