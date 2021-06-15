var Repository = function(items) {
    this.items = items || [];
  }
  Repository.prototype.get = function(id) {
    for (var i=0,len=this.items.length; i<len; i++) {
      if (this.items[i].id === id) {
        return this.items[i];
      }
    }
  }
  Repository.prototype.add = function(item) {
    if (toString.call(item) === "[object Array]") {
      this.items.concat(item);
    }
    else {
      this.items.push(item);
    }
  }
  Repository.prototype.remove = function(id) {
    for (var i=0,len=this.items.length; i<len; i++) {
      if (this.items[i].id === id) {
        this.removeIndex(i);
      }
    }
  }
  Repository.prototype.removeIndex = function(index) {
    if (this.items[index]) {
      if (/* items[i] has more than 1 reference to it */) {
        //   如何判断是否被引用
        // Only remove item from repository if nothing else references it
        this.items.splice(index,1);
        return;
      }
    }
  }


  var Collection = function(repo,items) {
    this.repo = repo;
    this.items = items || [];
  }
  Collection.prototype.remove = function(id) {
    for (var i=0,len=this.items.length; i<len; i++) {
      if (this.items[i].id === id) {
        // Remove object from this collection
        this.items.splice(i,1);
        // Tell repo to remove it (only if no other references to it)
        this.repo.removeIndex(i);
        return;
      }
    }
  }





  var contactRepo = new Repository([
    {id: 1, name: "Joe"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Tom"},
    {id: 4, name: "Jack"},
    {id: 5, name: "Sue"}
  ]);

var friends = new Collection(
  contactRepo,
  [
    contactRepo.get(2),
    contactRepo.get(4)
  ]
);

var coworkers = new Collection(
  contactRepo,
  [
    contactRepo.get(1),
    contactRepo.get(2),
    contactRepo.get(5)
  ]
);


// console.log(contactRepo.items); // contains item ids 1, 2, 3, 4, 5 
// console.log(friends.items);  // contains item ids 2, 4
// console.log(coworkers.items);  // contains item ids 1, 2, 5

coworkers.remove(2);
console.log(contactRepo.items); // contains item ids 1, 2, 3, 4, 5 
console.log(friends.items);  // contains item ids 2, 4
console.log(coworkers.items);  // contains item ids 1, 5

// friends.remove(4);
// console.log(contactRepo.items); // contains item ids 1, 2, 3, 5 
// console.log(friends.items);  // contains item ids 2
// console.log(coworkers.items);  // contains item ids 1, 5


// 注意如何coworkers.remove(2)没有从contactRepo删除id 2？这是因为它仍然引用了friends.items。但是，friends.remove(4)会导致从contactRepo中删除id 4，因为没有其他集合引用它。