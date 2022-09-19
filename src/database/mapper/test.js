export default {
  database: 'test', //config 中的 name
  insert(data) {
    const { name, age, address, sync } = data
    return this.db.execute(`INSERT INTO test (name, age, address, sync) VALUES('${name}', ${age}, '${address}', ${sync}) `)
  },
  delete(name) {
    return this.db.execute(`
      DELETE FROM test 
      WHERE name = '${name}'
    `)
  },
  update(data) {
    const { name, age, address, sync } = data
    return this.db.execute(`
      UPDATE test
      SET age = ${age}, address = '${address}', sync = ${sync}
      WHERE name = '${name}'
    `)

  },
  select() {
    return this.db.select(`
      select * from test
    `)
  },
  async sync() {
    const { data = [] } = await this.db.execute(`
      select * from test
      where sync = 1
    `)
    //TODO send ajax sync
    // uni.$ec.apis.xxx.xxx(data)
  }
}