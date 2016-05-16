module.exports = function(Child) {
  Child.beforeRemote(`create`, (context, user, callback) => {
    // Get the request from the server context
    const request = context.req;

    // Get current user id
    const userId = request.accessToken.userId;

    request.body.data.relationships = request.body.data.relationships || {};
    request.body.data.relationships.parent = request.body.data.relationships.parent || {};

    // Set relationship data for user
    request.body.data.relationships.parent.data = {
      id: userId,
    };

    // Continue creating the recipe
    callback();
  })
};
