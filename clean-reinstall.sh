#!/bin/bash
# Script PRO para limpieza bestial de node_modules y reinstalación
rimraf node_modules package-lock.json
npm install
