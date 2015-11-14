#!/bin/bash

#This is simple example how to use rnnlm tool for training and testing rnn-based language models
#Check 'example.output' how the output should look like
#SRILM toolkit must be installed for combination with ngram model to work properly


rm -f model
rm -f model.output.txt

awk 'NR % 2 == 0{print $0}' dataset > train
awk 'NR % 2 == 1{print $0}' dataset > test

#rnn model is trained here
time ./rnnlm -train train -valid test -rnnlm model -hidden 15 -rand-seed 1 -debug 2 -class 100 -bptt 4 -bptt-block 10 -direct-order 3 -direct 2 -binary


