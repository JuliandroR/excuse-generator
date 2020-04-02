const connection = require("../database/connections");

module.exports = {
  async listContrbutions(request, response) {
    const contributions = await connection("contributions").select("*");

    return response.json(contributions);
  },

  async createContributions(request, response) {
    const { excuse, author } = request.body;

    await connection("contributions").insert({
        excuse,
        author
    });

    return response.status(204).send();
  },

  // async deleteContributions(request, response) {
  //   const { id } = request.params;

  //   await connection("contributions")
  //     .where("id", id)
  //     .delete();

  //   return response.status(204).send();
  // }
};