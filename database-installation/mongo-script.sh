#!/bin/bash

mongorestore -d openfoodfacts ./dump/off --noIndexRestore

mongosh < mongo-script-index.js



