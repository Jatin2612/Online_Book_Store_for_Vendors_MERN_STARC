import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
    price,
  } = useLoaderData();

  const bookCategories = [
    "Friction",
    "Non-Friction",
    "History",
    "Programming",
    "Science",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "Business",
    "Children",
    "Religion",
    "Others",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelecterdValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  {
    /* handle book submition  */
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      price,
      // price
    };

    // console.log(bookObj);

    //Update book data

    fetch(`http://localhost:5000/book/${id}`,{
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
        alert("Book Data Updated Successfully!!!")  
    })

    
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book Data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row  */}
        <div className="flex gap-8">
          {/* book  title  */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
            />
          </div>

          {/* author name  */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* second row  */}
        <div className="flex gap-8">
          {/* image url  title  */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>

          {/* Category   */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelecterdValue}>
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* third row  */}
        <div>
          {/* book  description  */}
          <div className="mb-2 block">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              id="bookDescription"
              name="bookDescription"
              type="textarea"
              placeholder="Book Description"
              required
              rows={6}
              className="w-full"
              aria-setsize={5}
              defaultValue={bookDescription}
            />
          </div>
        </div>

        {/* fourth  row  */}
        <div className="flex gap-8">
          {/* book pdf link*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF Link" />
            </div>
            <TextInput
              id="bookPDFURL"
              name="bookPDFURL"
              type="text"
              placeholder="Book PDF Link"
              required
              defaultValue={bookPDFURL}
            />
          </div>

          {/*  price of book   */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="Book Price"
              required
              defaultValue={price}
            />
          </div>
        </div>

        <Button type="submit" className="mt-5 flex gap-8">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
