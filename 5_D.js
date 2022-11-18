// Dependency inversion principle - верхний уровень модулей, он не должен зависеть от абстракций нижнего уровня.
// И что вообще любые уровни должны зависеть от абстракций, а не от конкретики.

class Fetch {
  request(url){
    // return fetch(url).then(response => response.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get(){
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet(){
    return this.fetch.request('vk.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }
  clientGet(key){
    return this.localStorage.get(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }

  getData(key){
    return this.client.clientGet(key)
  }
}


const db1 = new Database(new LocalStorageClient())
console.log(db1.getData('random'));

const db2 = new Database(new FetchClient())
console.log(db2.getData('random 1'));


