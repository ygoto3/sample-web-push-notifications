#!/bin/bash

curl --header "Authorization: key={Firebase CLOUD MESSAGING Server key}" --header "Content-Type: application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"{subscriptionId = subscription.endpoint.split("/").pop()}\"]}"
