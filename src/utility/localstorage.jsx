const getStoredReadBook = () =>{
  const storedReadBook = localStorage.getItem('read-book');
  if(storedReadBook){
      return JSON.parse(storedReadBook);
  }
  return [];
}

// 



const saveReadBook = id =>{
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find(bookId => bookId === id);
  if(!exists){
      storedReadBooks.push(id);
      localStorage.setItem('read-book', JSON.stringify(storedReadBooks))
  }
}

const deleteReadBook = id => {
  let storedReadBooks = getStoredReadBook()
  const remaining = storedReadBooks.filter(b => b.id !== id)
  localStorage.setItem('storedReadBooks', JSON.stringify(remaining))
  toast.success('Blog Removed from Bookmark!')
}



const getStoredWishlist = () =>{
  // console.log('testify didar')
  const storedWishlistBook = localStorage.getItem('Wish-book');
  console.log(storedWishlistBook);
  if(storedWishlistBook){
      return JSON.parse(storedWishlistBook);
  }
  return [];
}
const saveWishlistBook = id =>{
  // console.log('test didar')
  const storedWishlistBooks = getStoredWishlist();
  const exists = storedWishlistBooks.find(bookId => bookId === id);
  if(!exists){
      storedWishlistBooks.push(id);
      localStorage.setItem('Wish-book', JSON.stringify(storedWishlistBooks))
  }
}





// Save array to local storage
const saveReadbookLocal = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
}

// Retrieve array from local storage
const setReadBook = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
}



// Save array to local storage
const wislistLocalStore = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
}

// Retrieve array from local storage
const setWishList = (key) => {
  const wishListData = localStorage.getItem(key);
  return wishListData ? JSON.parse(wishListData) : null;
}
export { getStoredReadBook, saveReadBook,deleteReadBook,saveWishlistBook,getStoredWishlist,saveReadbookLocal,
  setReadBook,wislistLocalStore,setWishList}