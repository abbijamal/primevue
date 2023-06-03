const TerminalProps = [
    {
        name: 'welcomeMessage',
        type: 'string',
        default: 'null',
        description: 'Initial text to display on terminal.'
    },
    {
        name: 'prompt',
        type: 'string',
        default: 'null',
        description: 'Prompt text for each command.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Uses to pass attributes to DOM elements inside the component.'
    }
];

module.exports = {
    terminal: {
        name: 'Terminal',
        description: 'Terminal is a text based user interface.',
        props: TerminalProps
    }
};
