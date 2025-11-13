#!/bin/bash
set -e

echo "building docker image on ec2 . . ."
cd app

#stop old containers
docker stop my-app || true
docker rm my-app || true

#build new image
docker build -t my-app:latest .
