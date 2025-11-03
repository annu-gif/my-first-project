#!/bin/bash
set -e

echo "running docker container . . ."
cd /home/ubuntu/app

#run container
docker run -d -p 80:80 --name my-app my-app:latest
