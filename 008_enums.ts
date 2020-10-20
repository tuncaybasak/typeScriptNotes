// Enum
// Enums or enumerations are a new data type supported in TypeScript. Most object-oriented languages like Java and C# use enums.

// Numeric Enum
enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}

// String Enum
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}

// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE

// Heterogeneous Enum
// Heterogeneous enums are enums that contain both string and numeric values.

enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}

