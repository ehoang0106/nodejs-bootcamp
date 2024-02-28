const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');


yargs.version('1.1.0');

// add comment

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// remove comment

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
})

//list command

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function () {
        console.log('Listing all the notes')
    }
})

//read command

yargs.command({
    command: 'read',
    describe: 'read your notes',
    handler: function () {
        console.log('Reading all the notes')
    }
})


// console.log(yargs.argv);

yargs.parse();
