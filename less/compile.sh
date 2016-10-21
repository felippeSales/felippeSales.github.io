#!/bin/bash


lessc --clean-css about.less > felipe.min.css
lessc --clean-css experience.less >> felipe.min.css
lessc --clean-css skills.less >> felipe.min.css
lessc --clean-css main.less >> felipe.min.css
lessc --clean-css sidebar.less >> felipe.min.css
lessc --clean-css contact.less >> felipe.min.css
