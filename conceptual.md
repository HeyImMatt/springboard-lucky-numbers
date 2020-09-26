### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
  * A standard way of mapping HTTP routes like GET, POST, PATCH, DELETE to CRUD functionality.

- What is a resource?
  * An object with a type, associated data, relationships to other resources

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
  * So that you can do validation checks on the request before performing the requested operation.

- What does idempotent mean? Which HTTP verbs are idempotent?
  * An operation that can be performed many times (with same data) with the result of all calls being the same as if it was done once. GET, PUT/PATCH, and DELETE are idempotent.

- What is the difference between PUT and PATCH?
  * PUT modifies the entire resource. PATCH can apply a partial update to the resource.

- What is one way encryption?
  * One way means it is not reversible. 

- What is the purpose of a `salt` when hashing a password?
  * A random string introduced before hashing to provide additional security and prevent duplicate passwords for different users from having the same hash value

- What is the purpose of the Bcrypt module?
  * Provides a hashing algorithm that makes it slow and expensive to use a brute force approach to reversing a hash and gaining access to the data. You can specify how many rounds of encryption it will use so as computers get faster, you can increase the work factor to maintain slowness.

- What is the difference between authorization and authentication?
  * Authentication is confirming who a user is whereas authorization is confirming the rights and priviledges of a user.