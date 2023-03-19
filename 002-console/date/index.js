#!/usr/bin/env node

import yargs from 'yargs/yargs'
import {hideBin} from 'yargs/helpers'

import {currentFunc, addFunc, subFunc} from './utils.js'

yargs(hideBin(process.argv))
.option( 'year', {
    alias: 'y',
    type: 'number',
    description: 'return the current/custom year',
})
.option( 'month', {
    alias: 'm',
    type: 'number',
    description: 'return the current/custom month',
})
.option( 'date', {
    alias: 'd',
    type: 'number',
    description: 'return the current/custom date',
})
.command({
    command: 'current',
    description: 'return the current/custom date information in ISO format',
    handler: currentFunc
})
.command({
    command: 'add',
    description: 'add a date to the current date',
    handler: addFunc
})
.command({
    command: 'sub',
    description: 'delete a date from the current date',
    handler: subFunc
})
.argv;