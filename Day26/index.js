let books = [
    {
        title: "A Better India: A Better World",
        Author : "Narayana Murthy",
        language: "English"
    },
    {
        title: "A Passage to India",
        Author : "E.M. Foster",
        language: "English"
    },
    {
        title: "A Revenue Stamp",
        Author : "Amrita Pritam",
        language: "English"
    },
    {
        title: "A Suitable Boy",
        Author : "Vikram Seth",
        language: "English"
    }
]
console.log("--------Before extracting--------")
console.log(books)
console.log("--------After extracting--------")

function extractTitleAndAuthor(books){
    let booksTitleAndAuthor = books.map((ele)=>{
        let {title, Author} = ele;
        return { title, Author }
    }) 
    console.log(booksTitleAndAuthor)
}

extractTitleAndAuthor(books)

