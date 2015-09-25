#!/bin/bash

node server &
PIDS[0]=$!
sleep 2

npm run teststack

RESULT=$?

# fix path inconsistencies in coverage output
sed -i 's/build/source/g' coverage/net/lcov.info

# publish results
GITHASH="$(git rev-parse HEAD)"
curl -F coverage=@coverage/net/lcov.info "https://cvr.vokal.io/coverage?token=$CVR_TOKEN&commit=$GITHASH&coveragetype=lcov"

for i in "${PIDS[@]}"
do
    if ! kill $i > /dev/null 2>&1; then
        echo "SIGTERM fail on process $i" >&2
    fi
done

exit $RESULT

