#!/bin/bash

find . -iname \*_test.js | xargs -i node {}
