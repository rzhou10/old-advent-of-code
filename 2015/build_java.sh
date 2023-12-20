#! /usr/bin/bash

javac -d bin days/*.java
cd bin

for x in $@
do
    java $x
done

cd ..