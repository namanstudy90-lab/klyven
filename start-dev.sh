#!/bin/bash
cd /home/naman/klyven
nohup npx next dev -H 0.0.0.0 -p 3000 > /home/naman/klyven/server.log 2>&1 &
echo $!
