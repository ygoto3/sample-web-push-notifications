# Sample Project for Web Push Notifications

A sample project for Web push notifications

## Set up an example

You need `Sender ID`, `Server key`, and `Subscription ID` to run this example.

* Sender ID
  * You can get a sender ID from [Firebase console](https://console.firebase.google.com/).
  * Set your sender ID to `gcm_sender_id` in the `manifest.json`.
* Server key
  * You can get a server key from [Firebase console](https://console.firebase.google.com/).
  * Set your server key to `Authorization: key` in the `request.sh`.
* Subscription ID
  * You can get a subscription ID displayed in your Chrome's JavaScript Console when you run this example.
  * Set your subscription ID to `registration_ids`.

## Run the example

```
$ python -m SimpleHTTPServer
$ open -a Google\ Chrome http://localhost:8000/
```

## Make a request to GCM

```
$ ./request.sh
```
