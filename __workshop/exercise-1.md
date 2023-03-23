# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer
| endpoint                    | method   | Description                                                                     |
| --------------------------- | -------- | ------------------------------------------------------------------------------- |
| `/stock`                    | `GET`    | Returns a list of all items in the cafe's stock,                                |
| `/stock/{item_id}`          | `GET`    | Returns details about a specific item in the cafe's stock                       |
| `/stock/{item_id}`          | `PUT`    | Updates the details of a specific item in the cafe's stock                      |
| `/stock/{item_id}`          | `DELETE` | Delete a specific item in the cafe's stock                      			       |
| --------------------------- | -------- | ------------------------------------------------------------------------------- |
| `/customers`                | `GET`    | Returns a list of all  customers,                                               |
| `/customers/{item_id}`      | `GET`    | Returns details about a specific customer                                       |
| `/customers/{item_id}`      | `PUT`    | Updates the details of a specific customer                                      |
| `/customers/{item_id}`      | `DELETE` | Delete a specific customer                      			                       |
| --------------------------- | -------- | ------------------------------------------------------------------------------- |
| `/seating`                  | `GET`    | Returns a list of all seating,                                                  |
| `/seating/{item_id}`        | `GET`    | Returns details about a specific seating                                        |
| `/seating/{item_id}`        | `PUT`    | Updates the details of a specific seating                                       |
| `/seating/{item_id}`        | `DELETE` | Delete a specific seating                                      			       |
