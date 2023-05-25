#!/bin/bash

# Set the URL to localhost
URL="http://localhost"

# Set the path to the JSON file
JSON_FILE="./payload/data.json"

# Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @"$JSON_FILE" "$URL"
