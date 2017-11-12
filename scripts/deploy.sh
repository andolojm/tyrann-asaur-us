#!/bin/bash

yarn
webpack-cli
sudo rm /var/www/asaur.us/public_html/*
sudo cp -r dist/* /var/www/asaur.us/public_html/
