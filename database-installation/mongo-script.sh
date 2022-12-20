#!/bin/bash

mongorestore -d openfoodfacts ./dump/off

mongosh < mongo-script-index.js



