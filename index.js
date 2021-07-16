// questionbank for program to prompt
const questions = [
    // user input for title
    {
        type: 'input',
        message: 'What is the TITLE of your project?',
        name: 'title',
    },
    // user input for description
    {
        type: 'input',
        message: 'Please provide a SHORT DESCRIPTION for your project',
        name: 'description',
    },
    // user input for install instructions
    {
        type: 'input',
        message: 'Please enter the INSTALLATION INSTRUCTIONS for your project',
        name: 'install-info',
    },
    // user input for usage information
    {
        type: 'input',
        message: 'Please provide some USAGE INFORMATION for your project',
        name: 'usage-info',
    },
    // user input for contribution guidelines
    {
        type: 'input',
        message: 'Please enter the CONTRIBUTION GUIDELINES for your project',
        name: 'guidelines',
    },
    // user input for test instructions
    {
        type: 'input',
        message: 'Please provide the TEST INSTRUCTIONS for your project',
        name: 'test-instruct',
    },
    // user selection of license
    {
        type: 'input',
        message: 'Please select the LICENSE you would like to use.',
        choices: ['MIT', 'GPL-3.0', 'MPL-2.0', 'Apache-2.0', 'BSD-3-Clause', 'None'],
        name: 'license',
    },
    // user input for github username
    {
        type: 'input',
        message: 'Please provide your GITHUB USERNAME.',
        name: 'github-id',
    },
    // user input for email id
    {
        type: 'input',
        message: 'Please provide your EMAIL ADDRESS.',
        name: 'email-id',
    },
];

