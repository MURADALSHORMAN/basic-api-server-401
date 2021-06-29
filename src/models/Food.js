'use strict';

const uuid = require('uuid').v4;

class Food {
  constructor() {
    this.db = [];
  }
  
  read(id) {
    if (id) {
      return this.db.find((data) => data.id === id);
    } else {
      return this.db;
    }
  }
////////////////////////////////////////////////////////data is obj={foodname:'string' ,type:'string'}
  create(data) {
    const record = {
      id: uuid(),
      data: data,
    };
    this.db.push(record);
    return record;
  }
  /////////////////////////////////////////////////

  update(id, data) {
for(let i=0;i<this.db.length;i++){
  if(id==this.db[i].id){
    this.db[i].data=data;
    return this.db[i];
  }
}

  }

  delete(id) {
    this.db =this.db.filter((rec)=> rec.id !==id);
  }
}

module.exports = Food ;