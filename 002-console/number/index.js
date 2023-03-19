#!/usr/bin/env node

import { createInterface } from 'readline'
import {stdin} from 'process'

import {checkNumber} from './utils.js'

const input = createInterface(stdin)

console.log('Загадано число в диапазоне от 0 до 100');

input.on('line', (inputData) => checkNumber(inputData, input));