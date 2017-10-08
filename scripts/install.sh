#!/bin/bash

# Server updates
sudo apt-get update

# Apache2
sudo apt-get install apache2
sudo ufw allow 'Apache Full'
sudo mkdir -p /var/www/asaur.us/public_html
sudo chown -R ubuntu:ubuntu /var/www/asaur.us/public_html
sudo chmod -R 755 /var/www
sudo cp scripts/asaur.us.conf /etc/apache2/sites-available/asaur.us.conf
sudo a2ensite asaur.us.conf
sudo a2dissite 000-default.conf
sudo systemctl restart apache2

# Node
sudo apt-get install npm
sudo npm install -g n
sudo n stable

# Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get install yarn
yarn install

# Webpack
sudo npm install -g webpack-cli

# Start deployment
scripts/deploy.sh
