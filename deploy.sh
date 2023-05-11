#!/bin/bash

echo "#--------------------------------------------#"
echo "#             PIPELINE START                 #"
echo "#--------------------------------------------#"

case "$1" in
	--prod)
		sudo systemctl start express-api-prod.service
		if [ -d $HOME/api-prod ]
		then
			rm -rf $HOME/api-prod
			git clone -b main git@github.com:ligtonribeiro/express-api-example.git api-prod
		else
			git clone -n main git@github.com:ligtonribeiro/express-api-example.git api-prod
		fi
		cd $HOME/express-api-example
		npm install
		npm run build
		sudo systemctl start express-api-prod.service
	;;
	--release)
		sudo systemctl start express-api-dev.service
		if [ -d $HOME/api-release ]
		then
			rm -rf $HOME/api-release
			git clone -b release git@github.com:ligtonribeiro/express-api-example.git api-release
		else
			git clone -n release git@github.com:ligtonribeiro/express-api-example.git api-release
		fi
		cd $HOME/api-release
		npm install
		npm run build
		sudo systemctl start express-api-dev.service
	;;
	*)
		echo Opção inválida: $1
		exit 1
	;;
esac

echo "#--------------------------------------------#"
echo "#             PIPELINE FINISH                #"
echo "#--------------------------------------------#"

