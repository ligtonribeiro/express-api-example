#!/bin/bash

echo "Starting pipeline"

echo "Stop service application..."
echo
sudo systemctl stop express-api.service
echo

echo "Checkout Github Repository..."
echo

if [ -d $HOME/express-api-example ]; then
	rm -rf $HOME/express-api-example
	git clone git@github.com:ligtonribeiro/express-api-example.git
else
	git clone git@github.com:ligtonribeiro/express-api-example.git
fi

echo

echo "Install Dependencies..."

echo
cd $HOME/express-api-example
npm install
echo

echo "Build da aplicação"
echo
npm run build
echo

echo "Start service application..."
echo
sudo systemctl start express-api.service

echo "End pipeline"

