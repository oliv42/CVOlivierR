const { SQLDataSource } = require('datasource-sql');
const DataLoader = require('dataloader');

// Cache Time To Leave : durée d'expiration du cache
const CACHETTL = 10;

class Post extends SQLDataSource {
    tableName = 'post';

    constructor(knexConfig) {
        super(knexConfig);
        this.connection = knexConfig.connection;
    }

    findAll() {
        return this.knex(this.tableName).connection(this.connection).select('*').cache(CACHETTL);
    }

    findByPk(id) {
        return this.knex(this.tableName)
            .connection(this.connection)
            .select('*')
            .where({ id })
            .cache(CACHETTL);
    }

    findByCategoryId(categoryId) {
        return this.knex(this.tableName)
            .connection(this.connection)
            .select('*')
            .where({ category_id: categoryId })
            .cache(CACHETTL);
    }
   
    insert(post) {
        return this.knex(this.tableName).connection(this.connection).insert(post).returning('*');
    }

    update(id, post) {
        return this.knex(this.tableName)
            .connection(this.connection)
            .update(post)
            .where({ id })
            .returning('*');
    }

    delete(id) {
        return this.knex(this.tableName).connection(this.connection).where({ id }).delete();
    }

    findByPkBulk(ids) {
        return (
        this.knex(this.tableName)
            .connection(this.connection)
            .select('*')
            .where('id', ids)
            .cache(CACHETTL)
            );
    }
    loader = new DataLoader(async (ids) => {

        // const posts = await 
    })
}

module.exports = Post;
