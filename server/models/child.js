module.exports = function(Child) {
  Child.beforeRemote(`create`, (context, user, callback) => {
    // Get the request from the server context
    const request = context.req;

    // Get current user id
    const userId = request.accessToken.userId;

    // Set relationship data for user
    request.body.data.relationships.parent.data = {
      id: userId,
    };

    // Continue creating the recipe
    callback();
  })
};
