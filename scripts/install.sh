sudo apt-get update
sudo apt-get install apache2
sudo ufw allow 'Apache Full'
sudo apt-get install npm
sudo npm install -g n
sudo n stable
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get install yarn
yarn install
sudo npm install -g webpack-cli
scripts/deploy.sh
