const connection = require("../database/connections");

module.exports = {
  async listExcuses(request, response) {
    const excuses = await connection("excuses").select("*");

    return response.json(excuses);
  },

  async createExcuse(request, response) {
    const { excuse, author } = request.body;

    await connection("excuses").insert({
        excuse,
        author
    });

    return response.status(204).send();
  },

  async deleteExcuse(request, response) {
    const { id } = request.params;

    await connection("excuses")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};