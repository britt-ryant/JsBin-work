// Write your code below

var poem = {
  author: "Robert Forest",
  datePublished: 1916,
  name: "The Road Not Taken",
  famousLine: "Two roads diverged in a yellow wood",
  
  quotePoem: function () {
    console.log(this.famousLine);
  }
};

poem.quotePoem();