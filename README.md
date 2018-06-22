# Basic processwire template

This is a basic template for projects created with processwire
it includes a basic file structure, a package.json and a webpack configuration file.

It's meant to give a quickstart for developement right out of the box.

To work with this template nodejs is required.
If this is your first time using nodejs and webpack you'll be asked to install webpack-cli.
Do so as the terminal suggests to you.

## Person responsible

Marc Mentha 	@Acconitum 		<marc.mentha@protonmail.com>

## Contributors

Marc Mentha 	@Acconitum 		<marc.mentha@protonmail.com>
Patrick Piguet	@PGtheG			<patrick.piguet@gmx.ch>

## Installation

* Get latest version of processwire
* Follow the installationsteps described by the native processwire installer
* Remove the template folder inside site directory
* Clone this repository into site directory from GitHub (make sure you are inside site directory)
```
git clone git@github.com:Acconitum/processwiretemplate.git templates
```
* Create a new repository on github.com (example: yourprojectname)
* Rename origin
```
git remote rename origin processwiretemplate
```
* Add origin
```
git remote add origin git@github.com:yourusername/yourprojectname.git
```
* Initial push to your GitHub repository
```
git push -u origin master
```
* Install node_modules by running following command
```
npm install
```
* Add following lines to your config.php inside site directory
```
$config->appendTemplateFile = 'includes/_prepend.php'; 
$config->prependTemplateFile = 'includes/_append.php'; 
```
* Rename every appearance of processwiretemplate to yourprojectname in following files:
** package.json
** README.md.tpl
* Remove this README and rename the README.md.tpl to README.md