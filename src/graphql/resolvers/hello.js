import Db from '../../db/models';

const Query = {
    async sayGreets(obj, { id }) {
        const result = await Db.hello.findByPk(id);
        return result ? `Hello ${result.name}!!` : "Hello... World?!";
    },
    async names(obj, args) {
        return await Db.hello.findAll();
    },
};

const Mutation = {
    async addGreetsName(obj, { name }) {
        const result = await Db.hello.create({ name });
        return result;
    },
    async delName(obj, { id }) {
        const result = await Db.hello.findByPk(id);
        if (result) {
            const success = await result.destroy({
                where: {
                    id
                }
            });

            if(success){
                return result;
            }

            throw new Error('Could not deleted.');
        }

        throw new Error(`Name for [${id}]ID not found.`);
    },
    async modName(obj, { id, name }) {
        const result = await Db.hello.findByPk(id);
        if (result) {
            return await result.update({ name });
        }

        throw new Error('Name not found.');
    }
}

export default {
    Query,
    Mutation
};
