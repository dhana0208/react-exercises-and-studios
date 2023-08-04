export default function BookList() {
   let pageTitle = "Booklist";
   let book1 = "https://m.media-amazon.com/images/I/51Axd7VKVlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51ExQZJubHL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-66LsP7th3pnqyE3hrIFyh51gjmVo_Sx0vw&usqp=CAU";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Book by Sudha Murty" />
         <img src={book2} alt="Pat of Silver Bush and Mistress Pat" />
         <img src={book3} alt="Book 2" />
      </div>      
   );
}