#!/bin/bash
docker run -v "$(pwd)":/home/bun/app oven/bun sh inside-docker-script.sh