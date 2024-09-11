const LibraryBook = {
    title: '',
    author: '',
    totalCopies: 0,
    pricePerBook: 0,
  
    
    init: function(title, author, totalCopies, pricePerBook) {
      this.title = title;
      this.author = author;
      this.totalCopies = totalCopies;
      this.pricePerBook = pricePerBook;
    },
  
   
    borrowBooks: function(numberOfBooks) {
      if (this.isAvailable(numberOfBooks)) {
        this.totalCopies -= numberOfBooks;
        return numberOfBooks * this.pricePerBook;
      } else {
        console.log('Not enough copies available');
        return 0;
      }
    },
  
    
    printDetails: function() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Available Copies: ${this.totalCopies}`);
      console.log(`Price per Book: $${this.pricePerBook}`);
    },
  
    
    isAvailable: function(numberOfBooks) {
      return this.totalCopies >= numberOfBooks;
    },
  
    
    returnBooks: function(numberOfBooks) {
      this.totalCopies += numberOfBooks;
      return numberOfBooks * this.pricePerBook * 0.5; 
    },
  
    
    applyDiscount: function(discountPercentage) {
      this.pricePerBook -= this.pricePerBook * (discountPercentage / 100);
    }
  };
  
 
  LibraryBook.init('JavaScript Essentials', 'Jane Doe', 10, 29.99);
  LibraryBook.init('Alchemist', 'Paulo Coelho', 10, 29.99);
  LibraryBook.init('secret', 'Rhonda', 10, 29.99);
  
 
  LibraryBook.printDetails();
  
 
  const cost = LibraryBook.borrowBooks(3);
  console.log(`Cost to borrow: $${cost}`);
  
 
  const refund = LibraryBook.returnBooks(2);
  console.log(`Refund received: $${refund}`);
  
 
  LibraryBook.applyDiscount(10);
  LibraryBook.printDetails();
  